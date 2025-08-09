import React, { useEffect, useState } from "react";
import { addReview, deleteReviewById, getReviews } from "../utils/reviewstored";
import ReviewForm from "../components/ReviewForm/ReviewForm";

const Home = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    setReviews(getReviews());
  }, []);

  const handleAddReview = (review) => {
    const updated = addReview(review);
    setReviews(updated);
  };

  const handleDeleteReview = (id) => {
    const updated = deleteReviewById(id);
    setReviews(updated);
  };
  return (
    <div>
      <ReviewForm onAddReview={handleAddReview}></ReviewForm>
    </div>
  );
};

export default Home;
