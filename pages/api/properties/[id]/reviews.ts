// pages/api/properties/[id]/reviews.ts

import type { NextApiRequest, NextApiResponse } from "next";

const reviews: { [key: string]: { id: number; author: string; comment: string; rating: number; date: string; }[] } = {
  "1": [
    {
      id: 101,
      author: "Alice",
      comment: "Beautiful place and excellent service!",
      rating: 5,
      date: "2024-06-01",
    },
    {
      id: 102,
      author: "Bob",
      comment: "Great location but a bit noisy.",
      rating: 4,
      date: "2024-06-05",
    },
  ],
  "2": [
    {
      id: 201,
      author: "Charlie",
      comment: "Perfect for a weekend getaway.",
      rating: 5,
      date: "2024-06-12",
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const propertyReviews = reviews[String(id)] || [];
  return res.status(200).json(propertyReviews);
}
