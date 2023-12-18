import React from "react";
import greenline from "../assets/images/png/headerbottom.png";
const Passion = () => {
  return (
    <>
      <img className="mt_180 w-100" src={greenline} alt="greenline" />
      <section className="bg_passion py_113 mt-4">
        <p
          className="text-center fs_30 fw-light fs_30 lh_normal text-black ff_maison fst-normal mb-0 lh_normal"
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          Our Work Begins with
        </p>
        <h2
          className="text-center text-uppercase mb-3 mx-auto fs_80 ff_sohne text-black lh_87"
          data-aos="fade-down"
          data-aos-duration="2600"
        >
          Passion and Purpose
        </h2>
        <p
          className="text-center mx-auto mw_621 fs_15 ff_maison fw-normal pt-lg-4 mb-0"
          data-aos="fade-down"
          data-aos-duration="2700"
        >
          Venveo team members love solving problems while creating an incredible
          experience for our clients. Bring your best skills to the table while
          also learning from your colleagues.
        </p>
      </section>
    </>
  );
};

export default Passion;
