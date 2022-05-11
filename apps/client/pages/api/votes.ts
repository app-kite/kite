import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../services/db';
import { getSession } from 'next-auth/react';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'PUT':
      return updateVote(req, res);
  }
}

async function updateVote(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session?.user) {
    res.status(401).json({});
    return;
  }

  const { id: authorId } = session.user;
  const { postId } = req.body;

  const vote = await prisma.votesOnPosts.findFirst({
    where: {
      postId,
      vote: {
        authorId: Number(authorId),
      },
    },
  });

  if (!vote) {
    await prisma.votesOnPosts.create({
      data: {
        post: {
          connect: {
            id: postId,
          },
        },
        vote: {
          create: {
            authorId: Number(authorId),
          },
        },
      },
    });
  } else {
    await prisma.vote.deleteMany({
      where: {
        authorId: Number(authorId),
        posts: {
          every: {
            postId,
          }
        }
      }
    })
  }

  const post = await prisma.post.findUnique({
    where: {
      id: postId
    },
    include: {
      votes: true,
      category: true,
    }
  });

  res.status(200).json(post);
}
