import React, { useState, useEffect, useRef } from "react";
import ReviewForm from "../components/ReviewForm/ReviewForm";
import ReviewList from "../components/ReviewList/ReviewList";
import {
  addReview,
  deleteReviewById,
  getReviews,
  updateReviews,
} from "../utils/reviewstored";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [editReview, setEditReview] = useState(null);

  // Ref to the form container
  const formRef = useRef(null);

  useEffect(() => {
    setReviews(getReviews());
  }, []);

  const handleAddReview = (review) => {
    const updated = addReview(review);
    setReviews(updated);
  };

  const handleEditReview = (review) => {
    setEditReview(review);

    // Scroll to form smoothly after state update
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleUpdateReview = (updateReview) => {
    const updated = updateReviews(updateReview);
    setReviews(updated);
    setEditReview(null);
  };

  const handleCancelEdit = () => {
    setEditReview(null);
  };

  const handleDeleteReview = (id) => {
    const updated = deleteReviewById(id);
    setReviews(updated);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-700 my-4 text-center border-b border-gray-300 pb-2">
        Welcome to Review App — Trusted Reviews, Real Experiences.
      </h1>

      {/* Section for Add Review Form */}
      <section
        id="home"
        ref={formRef}
        className="p-6 bg-white shadow-2xl rounded-2xl my-10 max-w-3xl mx-auto"
      >
        <ReviewForm
          onAddReview={handleAddReview}
          editReview={editReview}
          onUpdateReview={handleUpdateReview}
          onCancelEdit={handleCancelEdit}
        />
      </section>

      {/* Section for Reviews List */}
      <section id="reviews" className="mx-2 p-6">
        <ReviewList
          reviews={reviews}
          onDelete={handleDeleteReview}
          onEdit={handleEditReview}
        />
      </section>
    </div>
  );
};

export default Home;
