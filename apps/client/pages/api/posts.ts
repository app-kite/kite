import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../services/db';
import { getSession } from 'next-auth/react';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return createPost(req, res);
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
          id: session.user.id,
        },
      },
    },
  });

  res.status(200).json(post);
}
