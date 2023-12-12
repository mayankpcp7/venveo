import React from "react";
import himg from "../assets/images/png/headerimg.png";
import downarrow from "../assets/images/svg/down_arrow.svg";
import navlogo from "../assets/images/svg/Venveo Logo.svg";
import MyNav from "./MyNav";

const Header = () => {
  return (
    <>
      <header className="position-relative mb-5 pb-2">
      
        <img className="navlogo" src={navlogo} alt="navlogo" />
        <MyNav />
        <img
          className="hw_800 position-absolute end-0"
          src={himg}
          alt="headerimg"
        />
        <div className="d-flex justify-content-between ms_132 align-items-center">
          <div className="d-flex gap-4 flex-column mw_426">
            <p className="clr_sky text-uppercase mb-0 mb-2 fw-semibold mt_121 fs_15 ff_maison">
              careers
            </p>
            <h1 className="ff_sohne fw-bold fs_120 text-black text-uppercase lh_86">
              Flex your creative muscle
            </h1>
            <p className="text-start ff_maison fs_15 lh_166 mw_396 text-black fs_15 fw-normal">
              Become part of a growing team that believes in integrity and
              innovation every single day.
            </p>
            <button className="current_btn text-white fw-semibold fs_!5 bg_red ps-2 pb-1 border-none">
              Current Open Positions <img src={downarrow} alt="down" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
