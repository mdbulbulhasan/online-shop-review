import React from "react";

const ReviewList = ({ reviews = [], onDelete }) => {
  return (
    <div className="space-y-4">
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">No Reviews Yet</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="bg-white  rounded shadow">
            <h3 className="text-lg font-semibold text-indigo-600">
              {review.shop}
            </h3>
            <p className="text-yellow-500 text-sm">
              {"⭐".repeat(Number(review.rating))}
            </p>
            <p className="text-gray-700">{review.review}</p>
            <small>
              {review.date
                ? new Date(review.date).toLocaleString()
                : "No Date"}
            </small>
            <button
              onClick={() => onDelete(review.id)}
              className="text-red-500 text-sm ml-5 mt-2"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
