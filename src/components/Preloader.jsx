import React from "react";
import logo from "../assets/images/svg/Venveo Logo.svg";
const Preloader = () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("d-none");
    document.body.style.overflow = "unset";
  }, 3000);

  return (
    <section>
      <div id="preloader" className="position-fixed z_100 min-vh-100 w-100">
        <div className="d-flex align-items-center z_100 justify-content-center w-100 min-vh-100 bg-white">
          <img src={logo} alt="preloaderlogo" />
        </div>
      </div>
    </section>
  );
};

export default Preloader;
