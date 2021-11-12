import React from "react";
import HomeReview from "./HomeReview";
import "./HomeReviews.css";

const HomeReviews = () => {
  return (
    <div class="testimonial5 py-5 bg-inverse">
      <div class="container">
        {/* <!-- Row --> */}
        <div class="row justify-content-center">
          <div class="col-md-7 text-center">
            <h3 class="mb-3 text-white">
              Few Words from our Valuable Customers
            </h3>
            <h6 class="subtitle font-weight-normal">
              You can relay on our amazing features list and also our customer
              services will be great experience for you without doubt and in
              no-time
            </h6>
          </div>
        </div>
        {/* <!-- Row --> */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <HomeReview></HomeReview>
        </div>
      </div>
    </div>
  );
};

export default HomeReviews;
