import React from "react";
import playbutton from "../assets/images/svg/playbutton.svg";
import video from "../assets/video/aboutvideo.mp4";
import poster from "../assets/images/png/video_cover.png";
import { useRef } from "react";

const Aboutus = () => {
  const play = document.getElementById("playbutton");
  const myvideo = document.getElementsByClassName("video");
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      // play.style.display = "none";
      myvideo.controls = true;
    } else {
      videoRef.current.pause();
    }
  };
  const videoRef = useRef(0);
  return (
    <>
      <section className="bg_about py_116 px_12">
        <p
          className="text-center text-white ff_maison fs_30 mb-0 lh_normal fw-light"
          data-aos="zoom-out-down"
          data-aos-duration="1500"
        >
          A Little More
        </p>
        <h2
          className="ff_sohne fs_80 fw-bold text-center lh_87 text-white text-uppercase"
          data-aos="zoom-out-down"
          data-aos-duration="1900"
        >
          About Us
        </h2>
        <div
          class="d-flex mt-5 mw_797 mx-auto align-items-center position-relative"
          data-aos="zoom-out-down"
          data-aos-duration="2500"
        >
          <video
            ref={videoRef}
            poster={poster}
            src={video}
            className="mw_797 video"
            controls={false}
          />
          <button
            id="playbutton"
            className="play_button  border-0 bg-transparent"
            onClick={handlePlayPause}
          >
            {videoRef.current.paused}
            <img className="hw_50" src={playbutton} alt="playbutton" />
          </button>
        </div>
        <p
          className="text-center fs_30 ff_maison mw_583 text-white pt-5 mx-auto fw-light lh_normal"
          data-aos="zoom-out-down"
          data-aos-duration="2700"
        >
          “Reach your greatest potential. <br />  Everyone will help you and
          pull you to the top. It’s true teamwork - working together as an
          actual team.”
        </p>
        <p
          className="text-white ff_maison fs_15 fw-normal lh_133 text-center pt-4 mb-0"
          data-aos="zoom-out-down"
          data-aos-duration="2700"
        >
          Beth PopNikolov, CEO
        </p>
      </section>
    </>
  );
};

export default Aboutus;
