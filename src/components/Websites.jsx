import React from "react";
import { Row, Col } from "react-bootstrap";
import arrow from "../assets/images/svg/arrow.svg";
const Websites = () => {
  return (
    <>
      <div className="bg_parrot">
        <div className="d-flex flex-md-row px_87 flex-column ">
          <div className="w-sm-50">
            <section className="w-100 ps_87 pb_87 bg_number">
              <p className="text-start pt-5 clr_sky pt-4 text-uppercase ff_maison fs_15 fw-semibold lh_133">
                by the numbers
              </p>
              <Row className="w-100 justify-content-center justify-cobten ms_87">
                <Col md={4} sm={6}>
                  <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                    38%
                  </h2>
                  <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                    Average Increase in Traffic
                  </p>
                </Col>
                <Col md={4} sm={6}>
                  <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                    43%
                  </h2>
                  <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                    Average Increase in Leads
                  </p>
                </Col>
                <Col md={4} sm={6}>
                  <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                    420%
                  </h2>
                  <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                    Average Increase in Ad Spend Return
                  </p>
                </Col>
                <Col className="mt-md-5 pt-1 " md={4} sm={6}>
                  <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                    65+
                  </h2>
                  <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                    Subject Matter Experts
                  </p>
                </Col>
                <Col className="mt-md-5 pt-1" md={4} sm={6}>
                  <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                    43%
                  </h2>
                  <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                    Average Increase in Leads
                  </p>
                </Col>
                <Col className="mt-md-5 pt-1" md={4} sm={6}>
                  <h2 className="mb-0 text-start text-black ff_sohne lh_88 fs_50 fw-bold pt-1">
                    420%
                  </h2>
                  <p className="text-start text-black ff_maison fs_15 fw-medium mw_126 ls_2 lh_113 mb-0">
                    Average Increase in Ad Spend Return
                  </p>
                </Col>
              </Row>
              <h2 className="text-start ff_sohne mt-md-5 pt-4 fs_120 text-black text-uppercase lh_86">
                1,275,098+
              </h2>
              <p className="ff_maison fs_30 lh_normal py-3 my-1 mw_323 fw-light text-black">
                Leads Generated for Our Clients
              </p>
              <p className="text-start text-black ff_space fs_15 fw-normal">
                (Yes, That’s Million)
              </p>
            </section>
          </div>
          <div className="w-sm-50 w-100 mx-auto px_12 px-lg-0">
            <div className="mw_484 mx-auto pb_87 d-flex flex-column align-items-sm-start">
              <p className="ff_maison text-black fs_40 mt-sm-5 pt-4 text-black mb-0 fs_15 lh_normal fw-normal">
                Is Your Website Winning Your Audience?
              </p>
              <p className="text-start fs_15 ff_space lh_normal mb-5 pt-4 text-black fw_372">
                Get a Free Analysis of Gaps Your Website Has in Targeting the
                Channel
              </p>
              <input
                className="website_input px-3"
                placeholder="Your Name"
                type="text"
              />
              <input
                className="website_input px-3"
                placeholder="Your Email"
                type="Email"
              />
              <input
                className="website_input px-3 mb-2"
                placeholder="Enter Your Website"
                type="text"
              />
              <button className="analize_btn text-black ws_2 mt-5 ff_maison fs_15 lh_normal d-flex align-items-center fw-semibold">
                Analyze Your Site <img className="ps-2" src={arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Websites;
