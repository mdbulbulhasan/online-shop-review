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
    <div class>
      <div ref={formRef}>
        <ReviewForm
          onAddReview={handleAddReview}
          editReview={editReview}
          onUpdateReview={handleUpdateReview}
          onCancelEdit={handleCancelEdit}
        />
      </div>
      <div className="max-w-[95%] mx-auto flex justify-between items-center">
        <ReviewList
          reviews={reviews}
          onDelete={handleDeleteReview}
          onEdit={handleEditReview}
        />
      </div>
    </div>
  );
};

export default Home;
