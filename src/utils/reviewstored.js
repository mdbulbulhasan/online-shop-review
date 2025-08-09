const STORAGE_KEY = "reviews";

export function getReviews() {
  const storedReview = localStorage.getItem(STORAGE_KEY);
  return storedReview ? JSON.parse(storedReview) : [];
}

export function saveReviews(reviews) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}

export function addReview(newReview) {
  const currentReviews = getReviews();
  const updated = [newReview, ...currentReviews];
  saveReviews(updated);
  return updated;
}

export function updateReviews(updatedReview) {
  const currentReviews = getReviews();
  const updated = currentReviews.map((review) =>
    review.id === updatedReview.id ? updatedReview : review
  );
  saveReviews(updated);
  return updated;
}

export function deleteReviewById(id) {
  const currentReviews = getReviews();
  const updated = currentReviews.filter((review) => review.id !== id);
  saveReviews(updated);
  return updated;
}
