import React from "react";
import { Row, Col } from "react-bootstrap";
import arrow from "../assets/images/svg/arrow.svg";
import redarrow from "../assets/images/png/red arrow.png";
import { useState } from "react";
const Websites = () => {
    const [typicalform, setTypicalForm] = useState({
      email: "",
    });
    const [error, setError] = useState(false);
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const OnsubmitHandler = (e) => {
      e.preventDefault();
      setError(true);
      if (typicalform.email !== "" && regex.test(typicalform.email)) {
        setError(false);
        setTypicalForm({
          email: "",
        });
      }
    };
  return (
    <>
      <section className="bg_parrot position-relative">
        <img
          className="redarrow position-absolute d-lg-block d-none start-50"
          src={redarrow}
          alt="redarrow"
        />
        <div className="">
          <Row className="mx-auto">
            <Col className="bg_number pt-4" md={6}>
              <section className="mw_588 mx-auto pb_87 ">
                <div className="mx-auto">
                  <p
                    className="text-start  clr_sky pt-md-0 mt-5 text-uppercase ff_maison fs_15 fw-semibold lh_133"
                    data-aos="zoom-out-right"
                    data-aos-duration="1500"
                  >
                    by the numbers
                  </p>
                  <Row className="w-100 justify-content-center justify-cobten ms_87">
                    <Col
                      md={4}
                      xs={6}
                      data-aos="zoom-out-up"
                      data-aos-duration="1500"
                    >
                      <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                        38%
                      </h2>
                      <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                        Average Increase in Traffic
                      </p>
                    </Col>
                    <Col
                      md={4}
                      xs={6}
                      data-aos="zoom-out-right"
                      data-aos-duration="1500"
                    >
                      <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                        43%
                      </h2>
                      <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                        Average Increase in Leads
                      </p>
                    </Col>
                    <Col
                      className="mt-3 mt-sm-4 mt-md-0"
                      md={4}
                      xs={6}
                      data-aos="zoom-out-right"
                      data-aos-duration="1500"
                    >
                      <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                        420%
                      </h2>
                      <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                        Average Increase in Ad Spend Return
                      </p>
                    </Col>
                    <Col
                      className="mt-md-5 mt-3 mt-sm-4 pt-1 "
                      md={4}
                      xs={6}
                      data-aos="zoom-out-right"
                      data-aos-duration="1500"
                    >
                      <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                        65+
                      </h2>
                      <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                        Subject Matter Experts
                      </p>
                    </Col>
                    <Col
                      className="mt-md-5 mt-3 mt-sm-4 pt-1"
                      md={4}
                      xs={6}
                      data-aos="zoom-out-right"
                      data-aos-duration="1500"
                    >
                      <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                        43%
                      </h2>
                      <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                        Average Increase in Leads
                      </p>
                    </Col>
                    <Col
                      className="mt-md-5 mt-3 mt-sm-4 pt-1"
                      md={4}
                      xs={6}
                      data-aos="zoom-out-right"
                      data-aos-duration="1500"
                    >
                      <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                        420%
                      </h2>
                      <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                        Average Increase in Ad Spend Return
                      </p>
                    </Col>
                  </Row>
                  <h2
                    className="text-start ff_sohne mt-md-5 pt-4 fs_120 text-black text-uppercase lh_86"
                    data-aos="zoom-out-right"
                    data-aos-duration="1800"
                  >
                    1,275,098+
                  </h2>
                  <p
                    className="ff_maison fs_30 lh_normal py-3 my-1 mw_323 fw-light text-black"
                    data-aos="zoom-out-right"
                    data-aos-duration="2000"
                  >
                    Leads Generated for Our Clients
                  </p>
                  <p
                    className="text-start mb-2 text-black ff_space fs_15 fw-normal"
                    data-aos="zoom-out-right"
                    data-aos-duration="2200"
                  >
                    (Yes, That’s Million)
                  </p>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <div>
                <form
                  className="mw_484 mx-auto pb_87 d-flex flex-column align-items-sm-start"
                  onSubmit={(e) => OnsubmitHandler(e)}
                >
                  <p
                    className="ff_maison text-black fs_40 mt-5 pt-md-4 text-black mb-0 fs_15 lh_normal fw-normal"
                    data-aos="zoom-out-left"
                    data-aos-duration="1500"
                  >
                    Is Your Website Winning Your Audience?
                  </p>
                  <p
                    className="text-start fs_15 ff_space lh_normal mb-5 pt-4 text-black fw_372"
                    data-aos="zoom-out-left"
                    data-aos-duration="1700"
                  >
                    Get a Free Analysis of Gaps Your Website Has in Targeting
                    the Channel
                  </p>
                  <input
                    className="website_input px-3"
                    data-aos="zoom-out-left"
                    data-aos-duration="1900"
                    placeholder="Your Name"
                    type="text"
                  />
                  <input
                    onChange={(e) =>
                      setTypicalForm({
                        ...typicalform,
                        email: e.target.value,
                      })
                    }
                    value={typicalform.email}
                    className="website_input px-3"
                    data-aos="zoom-out-left"
                    data-aos-duration="2000"
                    placeholder="Your Email"
                    type="Email"
                  />
                  <input
                    className="website_input px-3 mb-2"
                    data-aos="zoom-out-left"
                    data-aos-duration="2300"
                    placeholder="Enter Your Website"
                    type="text"
                  />
                  <button 
                    className="analize_btn transition_300 text-black ws_2 mt-5 ff_maison fs_15 lh_normal d-flex justify-content-center align-items-center fw-semibold"
                    data-aos="zoom-out-left"
                    data-aos-duration="1500"
                   
                  >
                    Analyze Your Site{" "}
                    <img
                      className="ps-2 trtl_x transition_300"
                      src={arrow}
                      alt="arrow"
                    />
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Websites;
