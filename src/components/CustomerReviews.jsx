import React from "react";

const CustomerReviews = () => {
  const reviews = [
    { text: "Amazing cakes! Perfect for any occasion.", customer: "John Doe" },
    { text: "The chocolate cake is out of this world!", customer: "Jane Smith" },
    { text: "Fast delivery and fresh cakes, highly recommend.", customer: "David Johnson" }
  ];

  return (
    <section className="reviews-section">
      <h2>What Our Customers Say</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>"{review.text}"</p>
            <h4>- {review.customer}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
