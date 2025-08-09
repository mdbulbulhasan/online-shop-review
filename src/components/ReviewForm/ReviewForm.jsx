import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const ReviewForm = ({
  onAddReview,
  editReview,
  onUpdateReview,
  onCancelEdit,
}) => {
  const formKey = editReview ? editReview.id : "new";
  const [selectedRating, setSelectedRating] = useState(
    editReview ? Number(editReview.rating) : 0
  );

  useEffect(() => {
    if (editReview) {
      setSelectedRating(Number(editReview.rating));
    } else {
      setSelectedRating(0);
    }
  }, [editReview]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newReview = {
      id: editReview ? editReview.id : Date.now(),
      shop: form.shop.value.trim(),
      review: form.review.value.trim(),
      rating: selectedRating.toString(),
      date: new Date().toLocaleString(),
    };

    if (editReview) {
      onUpdateReview(newReview);
    } else {
      onAddReview(newReview);
    }
    form.reset();
    setSelectedRating(0);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-4 text-center">
        Share Your Experience: Submit or Update Your Shop Review
      </h2>

      <form
        key={formKey}
        onSubmit={handleSubmit}
        className="w-full max-w-3xl mx-auto bg-white p-4 md:p-6 rounded-2xl shadow-md space-y-5 border border-gray-100"
      >
        <input
          className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          type="text"
          name="shop"
          placeholder="Shop Name"
          defaultValue={editReview ? editReview.shop : ""}
          required
        />
        <textarea
          className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none min-h-[100px]"
          name="review"
          placeholder="Write your review"
          defaultValue={editReview ? editReview.review : ""}
          required
        ></textarea>

        {/* Custom Star Rating */}
        <div className="flex space-x-1 cursor-pointer">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={28}
              fill={star <= selectedRating ? "currentColor" : "none"}
              stroke={star <= selectedRating ? "#fbbf24" : "#9ca3af"} // Yellow or Gray
              className="transition-colors"
              onClick={() => setSelectedRating(star)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedRating(star);
              }}
              tabIndex={0}
              role="button"
              aria-label={`${star} Star`}
            />
          ))}
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
            disabled={selectedRating === 0} // optionally disable submit if no rating
          >
            {editReview ? "Update Review" : "Submit Review"}
          </button>

          {editReview && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 rounded-lg transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
