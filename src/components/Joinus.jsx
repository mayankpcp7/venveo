import React from "react";
import blackplay from "../assets/images/svg/play_black.svg"
const Joinus = () => {
  return (
    <>
      <section className="bg-white pb_227">
        <p className="text-center fs_30 mb-0 pt-5 mt-5 fw-light text-black lh_normal fs_30">
          Ready to Join Us?
        </p>
        <h2 className="text-center text-black lh_87 mb-0 fw-bold text-uppercase ff_sohne  fs_80">
          Current Open Positions
        </h2>
      </section>
      <section className="bg_parrot position-relative pb-5">
        <div className="d-flex bg-white intern mw_1161 mx-auto border_blue px_65  py_65">
          <div className="d-flex flex-column align-items-start">
            <p className=" ff_sohne fs_50 fw-bold mw_294 lh_88 mb-0 pb-2 text-uppercase text-black text-start">
              Intern software developer
            </p>
            <p className="ff_maison fw-light pt-1 text-black fs_30">(Remote)</p>{" "}
          </div>
          <div className="d-flex flex-column">
            <h5 className="text-start ff_maison pb-4 fw-light ps-3 ps-md-0 fs_15 mw_625">
              As an Intern Software Developer, your position will be developing
              new features of our website, as well as maintaining existing
              features.
            </h5>
            <a
              className="text-black ps-3 ps-md-0 ff_maison fs_15 text-decoration-none fw-semibold"
              href="#"
            >
              Learn More <img src={blackplay} alt="blackplay" />
            </a>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="ff_sohne text-center text-black fs_50 fw-bold lh_88 text-uppercase mb-0 ">
            Looking for something else?
          </p>
          <p className="text-center fs_15 fw-normal lh_133 ff_maison fw-normal mw_687 mb-0 pb-5 mx-auto">
            We'd still love to connect. Shoot us an email at careers@venveo.com
            and tell us why you'd be a great fit to work here.
          </p>
          <button className="text-white hw_email bg-black mb-4">
            Email Us
          </button>
        </div>
      </section>
    </>
  );
};

export default Joinus;
