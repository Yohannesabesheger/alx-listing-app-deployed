import React from 'react';

const CancellationPolicy = () => (
  <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-2">Cancellation policy</h2>
    <p className="text-gray-600 mb-4">
      Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
    </p>

    <h2 className="text-xl font-semibold mt-4 mb-2">Ground Rules</h2>
    <ul className="text-gray-600 space-y-2">
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>Follow the house rules</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>Treat your Host's home like your own</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>No smoking</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>No parties or events</span>
      </li>
    </ul>
  </div>
);

export default CancellationPolicy;