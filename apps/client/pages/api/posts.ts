import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../services/db';
import { getSession } from 'next-auth/react';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return createPost(req, res);
    case 'GET':
      return listPost(req, res);
  }
}

async function createPost(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session?.user) {
    res.status(401).json({});
    return;
  }

  const { title, text, categoryId } = req.body;

  const post = await prisma.post.create({
    data: {
      title,
      text,
      category: {
        connect: {
          id: categoryId,
        },
      },
      author: {
        connect: {
          id: Number(session.user.id),
        },
      },
    },
  });

  res.status(200).json(post);
}

async function listPost(req: NextApiRequest, res: NextApiResponse) {
  const limit = 12;
  const cursor = req.query.cursor ?? '';
  const cursorPayload =
    cursor === '' ? undefined : { id: parseInt(cursor as string, 10) };

  const posts = await prisma.post.findMany({
    skip: cursor !== '' ? 1 : 0,
    cursor: cursorPayload,
    take: limit,
    include: {
      category: true,
      votes: true,
    },
  });
  res.json({
    posts,
    nextId: posts.length === limit ? posts[limit - 1].id : undefined,
  });
}
