// app/api/properties/route.ts
import { NextResponse } from 'next/server';

const PROPERTYLISTINGSAMPLE = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image1.jpg",
    discount: "",
  },
  // ... more properties here
];

export async function GET() {
  return NextResponse.json(PROPERTYLISTINGSAMPLE);
}
