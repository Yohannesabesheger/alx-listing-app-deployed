import React from 'react';
import { PropertyProps } from '@/interfaces';

export const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} className="property-image" />
      <div className="property-details">
        <h2 className="property-name">{property.name}</h2>
        <p className="property-address">
          {property.address.city}, {property.address.country}
        </p>
        <p className="property-price">${property.price.toLocaleString()} / night</p>
        <p className="property-category">{property.category.join(' · ')}</p>
        <p className="property-rating">⭐ {property.rating}</p>
        {property.discount && (
          <p className="property-discount">-{property.discount}% OFF</p>
        )}
      </div>
    </div>
  );
};
