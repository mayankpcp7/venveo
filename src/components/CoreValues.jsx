import React from "react";
import honor from "../assets/images/png/honor.png";
import drive from "../assets/images/png/drive.png";
import bottomdrive from "../assets/images/png/drive_bottom.png";
const CoreValues = () => {
  return (
    <>
      <section className="mt-5 pt-5">
        <p className="text-center fs_30 lh_normal pt-4 mt-3 ff_maison mb-0">
          Our Company Culture
        </p>
        <h2 className="ff_sohne fs_80 fw-bold text-center text-black mb-3 pb-4 text-uppercase lh_87">
          our core values
        </h2>
        <p className="text-center ff_maison mw_621 mx-auto fs_15 lh_133 text-black">
          Venveo is committed to creating an environment where our team members
          thrive and are excited to arrive each day. Not only do we strive to
          create an impactful experience for our clients, we work to do the same
          for our employees as well.
        </p>
      </section>
      <section className="mt-5 pt-5">
        <div className="d-flex  position-relative mt-3  justify-content-between align-items-center">
          <span className="position-relative">
            <span className="honor_circle position-absolute">
              <p className="honor_1 ff_sohne mb-0 fs_80 fw-bold text-black ">
                1
              </p>
            </span>
            <img className="hw_honor" src={honor} alt="honor" />
          </span>

          <div className="d-flex flex-column me_171 mt-5">
            <h2 className="ff_sohne fw-bold text-uppercase mb-0 fs_80 text-black lh_87 mt-3 pt-5">
              honor
            </h2>
            <p className="ff_maison mb-0 text-black fw-normal mt-3 fs_15 mw_433 lh_133 pt-2">
              We place our team and clients first.
            </p>
            <p className="mt-3 text-black ff_maison fw-normal fs_15 mw_433">
              We stay true to our word and are devoted to accountability and
              commitment.
            </p>
          </div>
        </div>
      </section>
      <section className="mt_246 mx_drive">
        <div className="d-flex  position-relative mt-3  justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <h2 className="text-start fs_80 ff_sohne text-black text-uppercase fw-bold lh_87">
              Drive
            </h2>
            <p className="mw_433 text-start ff_maison fw-normal fs_15 ">
              We are a team of experts that are relentless about exceptional
              quality and breakthrough results.
            </p>
            <p className="mw_433 text-start ff_maison fw-normal fs_15 ">
              We challenge our team and clients to rise to their truest and
              most-fulfilled selves.
            </p>
            <p className="mw_433 text-start ff_maison fw-normal fs_15 ">
              Failure is never final.
            </p>
          </div>
          <span className="position-relative">
            <span className="drive_circle position-absolute">
              <p className="drive_2 ff_sohne mb-0 fs_80 fw-bold text-black ">
                2
              </p>
            </span>
            <img className="hw_drive" src={drive} alt="drive" />
          </span>
        </div>
      </section>
      <span className="mt-4">
        <img
          className="w-100 drive_bottom my-5 py-5"
          src={bottomdrive}
          alt="drivebottom"
        />
      </span>
    </>
  );
};

export default CoreValues;