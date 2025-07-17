"use client";

import axios from "axios";
import { useState, useEffect } from "react";

type Review = {
  id: number;
  author: string;
  comment: string;
  rating: number;
  date: string;
};

type Props = {
  propertyId: number;
};

const ReviewSection = ({ propertyId }: Props) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error: any) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) return <p className="text-gray-500 mt-4">Loading reviews...</p>;
  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (reviews.length === 0) return <p className="text-gray-500 mt-4">No reviews yet.</p>;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-100 rounded p-4 shadow-sm border border-gray-200"
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium">{review.author}</span>
              <span className="text-yellow-500 font-bold">⭐ {review.rating}/5</span>
            </div>
            <p className="text-gray-700 italic">"{review.comment}"</p>
            <p className="text-xs text-gray-500 mt-1">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
