import React from 'react'
import arrow from "../assets/images/svg/arrow.svg"
const Goals = () => {
  return (
    <>
      <section className="bg_goals py_81">
        <div className="d-flex align-items-center justify-content-center">
          <p className="ff_maison text-white fw-light fs_40 lh_normal me-3 mb-0">
            Ready to hit your goals?
          </p>
          <button className="btn_goal ms-4 fs_15 fw-semibold text-center">Book a Strategy Call <img className='pb-1' src={arrow} alt="arrow" /></button>
        </div>
      </section>
    </>
  );
}

export default Goals