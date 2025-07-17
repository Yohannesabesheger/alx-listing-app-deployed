// pages/api/bookings.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log("Booking received:", req.body);
    return res.status(201).json({ message: "Booking successful" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
