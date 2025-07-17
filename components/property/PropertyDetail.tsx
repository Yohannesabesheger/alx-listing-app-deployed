"use client";

import Image from "next/image";

export type Property = {
  id: number;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
};

type Props = {
  property: Property;
};

export default function PropertyDetail({ property }: Props) {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow rounded-lg">
      <div className="relative h-64 w-full mb-6">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover rounded"
          sizes="100vw"
          priority
        />
        {property.discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
            {property.discount}% OFF
          </span>
        )}
      </div>

      <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
      <p className="text-gray-600 mb-1">
        📍 {property.address.city}, {property.address.state}, {property.address.country}
      </p>
      <p className="text-yellow-500 font-semibold mb-4">⭐ {property.rating.toFixed(2)}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {property.category.map((cat) => (
          <span
            key={cat}
            className="text-xs px-3 py-1 bg-gray-100 border border-gray-300 rounded-full"
          >
            {cat}
          </span>
        ))}
      </div>

      <p className="text-xl font-bold text-gray-800 mb-4">${property.price} / night</p>

      <div className="flex gap-6 text-sm text-gray-700">
        <span>🛏 Beds: {property.offers.bed}</span>
        <span>🚿 Baths: {property.offers.shower}</span>
        <span>👥 Occupancy: {property.offers.occupants}</span>
      </div>
    </div>
  );
}
