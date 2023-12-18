import React from "react";
import arrow from "../assets/images/svg/arrow.svg";
const Goals = () => {
  return (
    <>
      <section className="bg_goals py_81 px_12">
        <div className="d-flex flex-md-row flex-column align-items-center justify-content-center">
          <p
            className="ff_maison text-white text-md-start text-center pb-4 pb-md-0 fw-light fs_40 lh_normal me-3 mb-0"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Ready to hit your goals?
          </p>
          <button
            className="btn_goal ms-md-4 ms-0 fs_15 fw-semibold text-center transition_300"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Book a Strategy Call{" "}
            <img
              className="pb-1 trtl_x transition_300"
              src={arrow}
              alt="arrow"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default Goals;
