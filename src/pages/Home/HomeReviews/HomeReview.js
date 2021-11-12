import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

const HomeReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/ReciveReview`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return [
    review.map((review) => (
      <div className="col">
        {" "}
        <div
          key={review._id}
          class="card border-dark mb-3 bg-dark text-gray"
          style={{ maxWidth: "18rem" }}
        >
          <div class="card-header">{review.ReviewersName}</div>
          <div class="card-body text-gray">
            <Rating
              name="half-rating-read"
              defaultValue={review.StarRating}
              precision={0.5}
              readOnly
            />

            <p class="card-text">{review.Comment}</p>
          </div>
        </div>
      </div>
    )),
  ];
};

export default HomeReview;
