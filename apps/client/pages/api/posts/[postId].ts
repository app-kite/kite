import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../services/db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getPost(req, res);
    case 'PATCH':
      return updatePost(req, res);
  }
}

async function getPost(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const { postId } = req.query;

  const post = await prisma.post.findUnique({
    where: {
      id: Number(postId),
    },
    include: {
      category: true,
      votes: {
        include: {
          vote: {
            include: {
              author: {
                select: {
                  id: true,
                  image: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  return res.status(200).json({
    ...post,
    isAuthor: post.authorId === Number(session?.user?.id),
  });
}

async function updatePost(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;

  const { status } = req.body;

  await prisma.post.updateMany({
    where: {
      id: Number(postId),
    },
    data: {
      status,
    },
  });

  const post = await prisma.post.findFirst({
    where: {
      id: Number(postId),
    }
  });

  return res.status(200).json(post);
}
