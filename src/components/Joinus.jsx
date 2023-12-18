import React from "react";
import blackplay from "../assets/images/svg/play_black.svg";
import whitearrow from "../assets/images/svg/white-arrow.svg";
const Joinus = () => {
  return (
    <>
      <section className="bg-white pb_227">
        <p
          className="text-center fs_30 mb-0 pt-5 mt-xl-5 fw-light text-black lh_normal fs_30"
          data-aos="zoom-out-up"
          data-aos-duration="1500"
        >
          Ready to Join Us?
        </p>
        <h2
          className="text-center text-black lh_87 mb-0 fw-bold text-uppercase ff_sohne  fs_80"
          data-aos="zoom-out-down"
          data-aos-duration="1700"
        >
          Current Open Positions
        </h2>
      </section>
      <section className="bg_parrot position-relative px-4 pb-5 ">
        <div className="d-flex flex-md-row flex-column bg-white intern mw_1161 mx-auto justify-content-between border_blue px_65  py_65">
          <div className="d-flex flex-column align-items-start">
            <p
              className=" ff_sohne fs_50 fw-bold mw_294 lh_88 mb-0 pb-2 text-uppercase text-black text-start"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Intern software developer
            </p>
            <p
              className="ff_maison fw-light pt-1 text-black fs_30"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              (Remote)
            </p>{" "}
          </div>
          <div className="d-flex flex-column">
            <h5
              className="text-start ff_maison pb-4 fw-light ps-0 ps-md-3 ps-lg-0 fs_15 mw_625"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              As an Intern Software Developer, your position will be developing
              new features of our website, as well as maintaining existing
              features.
            </h5>
            <a
              className="text-black  ps-0 ps-md-3 ps-lg-0 ff_maison text_green fs_15 text-decoration-none fw-semibold"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              href="#"
            >
              Learn More <img src={blackplay} alt="blackplay" />
            </a>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center mt_n4  align-items-center">
          <p
            className="ff_sohne text-center text-black fs_50 fw-bold lh_88 text-uppercase mb-0 "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Looking for something else?
          </p>
          <p
            className="text-center fs_15 fw-normal lh_133 pt-4 ff_maison fw-normal mw_687 mb-0 pb-5 mx-auto"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            We'd still love to connect. Shoot us an email at careers@venveo.com
            and tell us why you'd be a great fit to work here.
          </p>
          <button
            className="text-white transition_300 hw_email border-0 bg-black mb-4"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Email Us{" "}
            <img
              className="ps-2 white_arrow transition_300"
              src={whitearrow}
              alt="whitearrow"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default Joinus;
