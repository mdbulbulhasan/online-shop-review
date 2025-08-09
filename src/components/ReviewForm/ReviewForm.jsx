import React from "react";

const ReviewForm = ({ onAddReview }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newReview = {
      id: Date.now(),
      shop: form.shop.value,
      review: form.review.value,
      rating: form.rating.value,
      date: new Date().toLocaleString(),
    };
    onAddReview(newReview);
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="shop"
          placeholder="Shop Name"
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          name="review"
          placeholder="Write your review"
          required
        ></textarea>
        <select
          className="w-full p-2 border rounded"
          name="rating"
          defaultValue={5}
        >
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
