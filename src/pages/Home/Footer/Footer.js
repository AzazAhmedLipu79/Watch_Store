import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid p-0 mt-5">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example29"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <a className="text-white" href="/">
            Rolex.Com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
