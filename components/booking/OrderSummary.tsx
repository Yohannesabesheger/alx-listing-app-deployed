import React from 'react';

interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Review Order Details</h2>
    <div className="flex flex-col sm:flex-row items-start sm:items-center">
      <img 
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
        alt="Property" 
        className="w-full sm:w-32 h-32 object-cover rounded-md" 
      />
      <div className="mt-4 sm:mt-0 sm:ml-4">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">
          {bookingDetails.startDate} • {bookingDetails.totalNights} {bookingDetails.totalNights > 1 ? 'Nights' : 'Night'}
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6 border-t border-gray-200 pt-4">
      <div className="flex justify-between py-2">
        <p className="text-gray-600">Booking Fee</p>
        <p className="font-medium">${bookingDetails.bookingFee.toFixed(2)}</p>
      </div>
      <div className="flex justify-between py-2">
        <p className="text-gray-600">Subtotal</p>
        <p className="font-medium">${bookingDetails.price.toFixed(2)}</p>
      </div>
      <div className="flex justify-between py-2 border-t border-gray-200 mt-2 pt-2">
        <p className="font-semibold">Grand Total</p>
        <p className="font-semibold text-lg">
          ${(bookingDetails.bookingFee + bookingDetails.price).toFixed(2)}
        </p>
      </div>
    </div>
  </div>
);

export default OrderSummary;