import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../services/db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getCategories(req, res);
    case 'POST':
      return createCategory(req, res);
  }
}

async function getCategories(req: NextApiRequest, res: NextApiResponse) {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: {
          posts: true
        }
      }
    }
  });

  res.status(200).json(categories.map(category => {
    return {
      id: category.id,
      name: category.name,
      posts: category._count.posts,
    }
  }));
}

async function createCategory(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;

  const category = await prisma.category.create({
    data: {
      name,
    }
  });

  res.status(201).json(category);
}
