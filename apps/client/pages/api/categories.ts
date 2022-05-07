import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../services/db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getCategories(req, res);
  }
}

async function getCategories(req: NextApiRequest, res: NextApiResponse) {
  const categories = await prisma.category.findMany();

  res.status(200).json(categories);
}
