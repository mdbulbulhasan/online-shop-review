import React, { useState, useMemo } from "react";
import { Star, Quote, Store } from "lucide-react";

const ReviewList = ({ reviews, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(1);
  const [sortOrder, setSortOrder] = useState("newest"); // newest or oldest

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    return reviews
      .filter(
        (review) =>
          review.shop.toLowerCase().includes(searchTerm.toLowerCase()) &&
          Number(review.rating) >= minRating
      )
      .sort((a, b) => {
        if (!a.date || !b.date) return 0;
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [reviews, searchTerm, minRating, sortOrder]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center border-b border-gray-300 pb-2">
        Verified Reviews to Help You Shop Smarter
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-1/4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm space-y-6">
          <h3 className="text-lg font-semibold text-indigo-700">
            Filter Reviews
          </h3>

          <div>
            <label className="block mb-1 font-medium text-indigo-700">
              Shop Name
            </label>
            <input
              type="text"
              placeholder="Search shops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-indigo-700">
              Minimum Rating
            </label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full p-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>
                  {"⭐".repeat(r)} & Up
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-indigo-700">
              Sort by Date
            </label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full p-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </aside>

        <main className="flex-1">
          {filteredReviews.length === 0 ? (
            <p className="text-center text-gray-500 italic mt-6">
              No Reviews Yet
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col"
                >
                  <div className="bg-gradient-to-r from-indigo-50 to-white px-5 py-4 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="flex gap-2 text-lg font-bold text-indigo-800 group-hover:text-indigo-900 transition-colors duration-200">
                        <Store /> {review.shop}
                      </h3>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        {Array.from({ length: Number(review.rating) }).map(
                          (_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                          )
                        )}
                      </div>
                    </div>
                    <small className="text-gray-400 text-xs block mt-1">
                      {review.date
                        ? new Date(review.date).toLocaleString()
                        : "No Date"}
                    </small>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div className="relative bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                      <Quote
                        size={18}
                        className="absolute -top-2 -left-2 text-indigo-300"
                      />
                      <p className="text-gray-700 text-sm italic leading-relaxed">
                        {review.review}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-3 mt-5">
                      <button
                        onClick={() => onEdit(review)}
                        className="flex-1 bg-indigo-50 text-indigo-500 border border-indigo-200 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors duration-200 cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(review.id)}
                        className="flex-1 bg-red-50 text-red-500 border border-red-200 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors duration-200 cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ReviewList;
