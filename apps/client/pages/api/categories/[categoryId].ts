import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../services/db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'DELETE':
      return deleteCategory(req, res);
  }
}

async function deleteCategory(req: NextApiRequest, res: NextApiResponse) {
  const { categoryId } = req.query;
  const { newCategoryId } = req.body;

  await prisma.post.updateMany({
    where: {
      categoryId: Number(categoryId),
    },
    data: {
      categoryId: newCategoryId
    },
  });

  await prisma.category.delete({
    where: {
      id: Number(categoryId),
    },
  });

  res.status(200).json({});
}
