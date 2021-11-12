/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="bg-dark  text-light py-5 service-8 my-4">
      <div className="container">
        {/* <!-- Row --> */}
        <div className="row">
          {/* <!-- Column --> */}
          <div className="col-lg-6 ">
            <small className="text-info">Success Stories</small>
            <h3>Re-Targeting gets easier with Rolex</h3>

            <ul className="list-block list-style-none pl-0 mb-3">
              <li className="py-2">
                <span className="text-info mr-2">1.</span> Powerful and Faster
                Results for your Time
              </li>
              <li className="py-2">
                <span className="text-info mr-2">2.</span> Make your site in
                no-time with Rolex
              </li>
              <li className="py-2">
                <span className="text-info mr-2">3.</span> Tons of Features and
                Watch available here
              </li>
              <li className="py-2">
                <span className="text-info mr-2">4.</span> What are you wait
                for? Go and Get it.
              </li>
            </ul>
            <a
              href="/"
              className="btn btn-info-gradiant btn-md border-0 text-white"
            >
              <span>View Details</span>
            </a>
          </div>
          {/* <!-- Column --> */}
          <div className="col-lg-6">
            <div className="p-3">
              <iframe
                id="ytplayer"
                type="text/html"
                width="600"
                height="400"
                src="https://www.youtube.com/embed/18XnJ2J-NsI"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          {/* <!-- Column --> */}
        </div>
        {/* <!-- Row --> */}
      </div>
    </div>
  );
};

export default About;
