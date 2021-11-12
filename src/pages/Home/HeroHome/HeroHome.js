import React from "react";

const HeroHome = () => {
  return (
    <div className="container ">
      {" "}
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Rolex Watch Store</h1>
          <div className="col-lg-6  mx-auto">
            <p className="fs-5 mb-4">
              The Rolex collection of prestigious, high-precision timepieces.
              Rolex offers a wide assortment of Oyster Perpetual and Cellini
              watches to suit any wrist. Discover the broad selection of Rolex
              watches to find a perfect combination of style and functionality.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                onClick={() => {
                  window.location.replace("/In/Products");
                }}
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                Explore More
              </button>
              <button
                onClick={() => {
                  window.location.replace("/In/Review");
                }}
                type="button"
                className="btn btn-outline-light btn-lg px-4"
              >
                Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
