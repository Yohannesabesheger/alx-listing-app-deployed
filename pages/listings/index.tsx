// import { PropertyCard } from '@/components/PropertyCard';
// import { PROPERTYLISTINGSAMPLE } from '@/constants';
// import React from 'react';

// export default function ListingPage() {
//   return (
//     <main style={{ padding: '2rem', background: '#f5f5f5' }}>
//       <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏡 Property Listings</h1>
//       <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
//         {PROPERTYLISTINGSAMPLE.map((property, index) => (
//           <PropertyCard key={index} property={property} />
//         ))}
//       </div>
//     </main>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";

type Property = {
  id: number;
  name: string;
  address: { state: string; city: string; country: string };
  rating: number;
  category: string[];
  price: number;
  offers: { bed: string; shower: string; occupants: string };
  image: string;
  discount: string;
};

type ListingsProps = {
  properties: Property[];
};

export default function ListingsPage({ properties }: ListingsProps) {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/listings/${property.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              {property.discount && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {property.discount}% OFF
                </span>
              )}
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-1">{property.name}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {property.address.city}, {property.address.state}, {property.address.country}
              </p>
              <p className="text-yellow-500 font-semibold mb-2">⭐ {property.rating.toFixed(2)}</p>
              <p className="text-gray-800 font-bold mb-3">${property.price} / night</p>
              <ul className="flex gap-3 flex-wrap text-xs text-gray-500 mb-2">
                {property.category.map((cat) => (
                  <li key={cat} className="border px-2 py-0.5 rounded">
                    {cat}
                  </li>
                ))}
              </ul>
              <div className="text-sm text-gray-700 flex justify-between">
                <span>🛏 {property.offers.bed} Beds</span>
                <span>🚿 {property.offers.shower} Baths</span>
                <span>👥 {property.offers.occupants} Guests</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Get protocol and host dynamically
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const host = context.req.headers.host;
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/properties`);
  const properties: Property[] = await res.json();

  return {
    props: {
      properties,
    },
  };
};
