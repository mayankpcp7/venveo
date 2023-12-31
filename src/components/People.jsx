import React from "react";
import Slider from "react-slick";
import { sliderData } from "./Helper";
import arrow from "../assets/images/svg/sliderarrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Nextbtn, Backbtn } from "./Helper";
const People = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnFocus: false,
          pauseOnHover: false,
        },
      },
      {
        breakpoint: 1361,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1033,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 691,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const first = React.useRef();
  return (
    <>
      <section>
        <h2
          className="text-center fs_80 text-uppercase lh_87 ff_sohne mt-1 fw-bold text-black"
          data-aos="zoom-out-up"
          data-aos-duration="1500"
        >
          people love it here
        </h2>
        <p
          className="text-center fs_30 ff_maison mb-0 fw-light lh_normal pt-1"
          data-aos="zoom-out-up"
          data-aos-duration="1700"
        >
          The Nitty Gritty
        </p>

        <div className="d-flex justify-content-between position-relative  bg_seagreen mt_149">
          <div
            className="position-absolute d-xxl-none prev_btn start-0 z-3"
            onClick={() => first.current.slickPrev()}
          >
            <Backbtn />
          </div>
          <div
            className="position-absolute d-xxl-none next_btn end-0 z-3"
            onClick={() => first.current.slickNext()}
          >
            <Nextbtn />
          </div>
          <Slider
            {...settings}
            ref={first}
            className="w-100 d-xxl-none d-block trtl_y"
          >
            {sliderData.map((people) => {
              return (
                <div className="d-flex flex-column align-items-center align-items-sm-start justify-content-between h-100 trty_48">
                  <img className="hw_people" src={people.img} alt="people" />
                  <img
                    className="mt-4 hw_icon ms-sm-4"
                    src={people.icons}
                    alt="icons"
                  />
                  <h4 className="ff_maison text-sm-start text-center pt-4 ps-sm-4 fw-light lh_normal mw_325  text-white fs_30">
                    {people.head}
                  </h4>
                  <p className="mw_315 lh_133 ps-sm-4 text-center text-sm-start ff_maison text-white fs_15 lh_133 pt-3 fw-normal">
                    {people.pera}
                  </p>
                  <a className="c_pointer hover_green learn ff_maison ps-4 d-flex text-decoration-none transition_300 fw-semibold fs_15 text-white mt-3">
                    Learn More{" "}
                    <img className="ps-2 learn_pic" src={arrow} alt="" />
                  </a>
                </div>
              );
            })}
          </Slider>
          {sliderData.map((people) => {
            return (
              <div className=" d-flex justify-content-between pb-4">
                <div className="d-flex flex-column justify-content-between h-100 trty_48 d-none d-xxl-flex">
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
                  <a className="c_pointer hover_green ff_maison ps-4 d-flex text-decoration-none transition_300 fw-semibold fs_15 text-white mt-3">
                    Learn More{" "}
                    <img
                      className="ps-2 learn_pic transition_300"
                      src={arrow}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default People;
