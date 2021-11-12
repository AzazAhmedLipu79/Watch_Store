import React from "react";
import Footer from "../Footer/Footer";
import HeroHome from "../HeroHome/HeroHome";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import HomeReviews from "../HomeReviews/HomeReviews";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <HeroHome></HeroHome>
      <FeatureProducts></FeatureProducts>
      <About></About>
      <HomeReviews></HomeReviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
