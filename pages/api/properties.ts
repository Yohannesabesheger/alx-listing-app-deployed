// pages/api/properties.ts
import type { NextApiRequest, NextApiResponse } from "next";

const PROPERTYLISTINGSAMPLE = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-16407177/original/342b5cd0-6fa5-45df-a442-45fff19114a2.jpeg?im_w=1200",
    discount: "",
  },
  {
    id: 2,
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-16407177/original/9c74b76f-ca08-41ba-b81b-e0d99bfd3ba2.jpeg?im_w=1440",
    discount: "",
  },
  // add more properties as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(PROPERTYLISTINGSAMPLE);
}
