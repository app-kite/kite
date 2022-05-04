import type {NextApiRequest, NextApiResponse} from 'next';
import {getSession} from 'next-auth/react';
import {prisma} from '../../services/db';

const secret = process.env.SECRET;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'POST':
      return createOrg(req, res);
  }
}

  async function createOrg(req: NextApiRequest, res: NextApiResponse) {
  const body: CreateOrgRequestBody = req.body;
  const session = await getSession({req});

  if (session?.user?.id) {
    const org = await prisma.org.create({
      data: {
        name: body.name,
        slug: body.slug,
        ownerId: session.user.id,
      }
    });
    res.status(200).json(org);
  } else {
    res.status(401).json({error: 'Not authorized'});
  }
}

type CreateOrgRequestBody = {
  name: string;
  slug: string;
}
