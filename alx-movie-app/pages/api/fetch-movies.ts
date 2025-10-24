import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(200).json({ movies: [] });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(\Method \ Not Allowed\);
  }
}
