import React from "react";
import "./HeroHome.css";

const HeroHome = () => {
  return (
    <>
      <div
        style={{
          height: "90vh",
          backgroundImage:
            "url(https://media.istockphoto.com/photos/watch-shop-window-picture-id609094568?b=1&k=20&m=609094568&s=170667a&w=0&h=Stq934elcsuVjOVCAku4Gey-sksuydq9N_H61apjrq4=)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        class=" container position-relative w-100"
      >
        <div
          class="position-absolute text-white d-flex flex-column align-items-center justify-content-center"
          style={{
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            backgroundColor: " rgba(0,0,0,.6)",
          }}
        >
          <span>End of Time</span>
          <h1 class="mb-4 mt-2 font-weight-bold text-center">
            Rolex Web Store
          </h1>
          <div class="text-center">
            {/* <!-- hover background-color: white; color: black; --> */}
            <a
              href="/In/Products"
              id="filled"
              class="btn px-5 py-3 text-white mt-3 mt-sm-0 mx-1"
              style={{ borderRadius: "30px", backgroundColor: " #9B5DE5" }}
            >
              Get Started
            </a>
            {/* <!-- hover background-color: #9B5DE5; color: white; --> */}
            <a
              href="/In/Products"
              id="outlined"
              class="btn px-5 py-3 text-white mt-3 mt-sm-0 mx-1"
              style={{ borderRadius: "30px", border: "1px solid #9B5DE5" }}
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHome;
