import React from "react";
import honor from "../assets/images/png/honor.png";
import drive from "../assets/images/png/drive.png";
import bottomdrive from "../assets/images/png/drive_bottom.png";
const CoreValues = () => {
  return (
    <>
      <section className="mt-xl-5 mt-lg-3  pt-5">
        <p
          className="text-center fs_30 lh_normal pt-xl-4 mt-xl-3 ff_maison mb-0"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          Our Company Culture
        </p>
        <h2
          className="ff_sohne fs_80 fw-bold text-center text-black mb-3 pb-xl-4 text-uppercase lh_87"
          data-aos="zoom-in-up"
          data-aos-duration="2700"
        >
          our core values
        </h2>
        <p
          className="text-center ff_maison mw_621 mx-auto fs_15 lh_133 text-black"
          data-aos="zoom-in-up"
          data-aos-duration="2800"
        >
          Venveo is committed to creating an environment where our team members
          thrive and are excited to arrive each day. Not only do we strive to
          create an impactful experience for our clients, we work to do the same
          for our employees as well.
        </p>
      </section>
      <section className="mt-xl-5 pt-md-5 pt-3">
        <div className="d-flex  position-relative mt-3 justify-content-center justify-content-lg-between align-items-center">
          <span className="position-relative d-lg-block d-none">
            <span className="honor_circle position-absolute">
              <p className="honor_1 ff_sohne mb-0 fs_80 fw-bold text-black ">
                1
              </p>
            </span>
            <img
              className="hw_honor d-md-block d-none"
              src={honor}
              alt="honor"
            />
          </span>

          <div className="d-flex flex-column align-items-lg-start align-items-center  me_171 mt-xl-5 ps-lg-5 px_12 ms-lg-5 me_171">
            <h2
              className="ff_sohne fw-bold text-uppercase mb-0 fs_80 text-black lh_87 mt-xl-3 pt-xl-5"
              data-aos="zoom-in-left"
              data-aos-duration="2500"
            >
              honor
            </h2>
            <p
              className="ff_maison mb-0 text-black fw-light mt-3 fs_15 mw_433 lh_133 pt-2"
              data-aos="zoom-in-left"
              data-aos-duration="2700"
            >
              We place our team and clients first.
            </p>
            <p
              className="mt-3 text-black ff_maison fw-light text-lg-start text-center fs_15 mw_433"
              data-aos="zoom-in-left"
              data-aos-duration="2900"
            >
              We stay true to our word and are devoted to accountability and
              commitment.
            </p>
            <span className="position-relative d-lg-none d-block">
              <span className="drive_circle position-absolute">
                <p className="drive_2 ff_sohne mb-0 fs_80 fw-bold text-black ">
                  1
                </p>
              </span>
              <img
                className="hw_honor d-lg-none d-block"
                src={honor}
                alt="honor"
              />
            </span>
          </div>
        </div>
      </section>
      <section className="mt_246 mx_drive">
        <div className="d-flex  position-relative mt-3  justify-content-lg-between justify-content-center align-items-lg-center align-items-start">
          <div className="d-flex flex-column mx_0 px_0 pe-lg-5 me-lg-4 me-xl-0 px_12">
            <h2
              className="text-lg-start text-center fs_80 ff_sohne text-black text-uppercase fw-bold lh_87"
              data-aos="fade-in-right"
              data-aos-duration="2500"
            >
              Drive
            </h2>
            <p
              className="mw_433 mx-lg-0 mx-auto text-lg-start text-center ff_maison fw-light fs_15 "
              data-aos="fade-in-right"
              data-aos-duration="2700"
            >
              We are a team of experts that are relentless about exceptional
              quality and breakthrough results.
            </p>
            <p
              className="mw_433 mx-lg-0 mx-auto  text-lg-start text-center ff_maison fw-light fs_15 "
              data-aos="fade-in-right"
              data-aos-duration="2900"
            >
              We challenge our team and clients to rise to their truest and
              most-fulfilled selves.
            </p>
            <p
              className="mw_433 mx-lg-0 mx-auto  text-lg-start text-center ff_maison fw-light fs_15 "
              data-aos="fade-in-right"
              data-aos-duration="2900"
            >
              Failure is never final.
            </p>
            <span className="position-relative d-lg-none d-block">
              <span className="drive_circle position-absolute">
                <p className="drive_2 ff_sohne mb-0 fs_80 fw-bold text-black ">
                  2
                </p>
              </span>
              <img
                className="hw_drive w_100 d-lg-none"
                src={drive}
                alt="drive"
              />
            </span>
          </div>
          <span className="position-relative d-lg-block d-none">
            <span className="drive_circle position-absolute">
              <p className="drive_2 ff_sohne mb-0 fs_80 fw-bold text-black ">
                2
              </p>
            </span>
            <img className="hw_drive" src={drive} alt="drive" />
          </span>
        </div>
      </section>
      
        <img className="w-100 py_123" src={bottomdrive} alt="bottomdrive" />
      
    </>
  );
};

export default CoreValues;
