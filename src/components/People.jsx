import React from "react";
import Slider from "react-slick";
import { sliderData } from "./Helper";
import arrow from "../assets/images/svg/sliderarrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const People = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <h2 className="text-center fs_80 text-uppercase lh_87 ff_sohne mt-1 fw-bold text-black">
          people love it here
        </h2>
        <p className="text-center fs_30 ff_maison mb-0 fw-light lh_normal pt-1">
          The Nitty Gritty
        </p>

        <div className="d-flex justify-content-between bg_seagreen mt_149">
     
            {sliderData.map((people) => {
              return (
                <div className="d-flex flex-column h-100 trty_48">
                  <img className="hw_people" src={people.img} alt="people" />
                  <img
                    className="mt-4 hw_icon ms-4"
                    src={people.icons}
                    alt="icons"
                  />
                  <h4 className="ff_maison pt-4 ps-4 fw-light lh_normal mw_325  text-white fs_30">
                    {people.head}
                  </h4>
                  <p className="mw_315 lh_133 ps-4 ff_maison text-white fs_15 lh_133 pt-3 fw-normal">
                    {people.pera}
                  </p>
                  <a className="ff_maison ps-4 fw-semibold fs_15 text-white mt-3">
                    Learn More <img className="ps-2" src={arrow} alt="" />
                  </a>
                </div>
              );
            })}
          
        </div>
      </section>
    </>
  );
};

export default People;
