import React from "react";
import { Row, Col } from "react-bootstrap";
import footerlogo from "../assets/images/png/footer_logo.png";
import facebook from "../assets/images/svg/Facebook.svg";
import instagram from "../assets/images/svg/Instagram.svg";
import linkedin from "../assets/images/svg/LinkedIn.svg";
import x from "../assets/images/svg/X.svg";
import youtube from "../assets/images/svg/Youtube.svg";
const Footer = () => {
  return (
    <>
      <footer className="bg_darksky">
        <div className=" mx_footer pt_90">
          <Row className="justify-content-between">
            <Col xxl={8} xl={12}>
              <Row>
                <Col xl={3} lg={4} xs={6}>
                  <h5 className="text-white ff_maison fs_12 fw-medium lh_108 mb-0 mb-4 text-uppercase">
                    how we help
                  </h5>
                  <ul className="d-flex flex-column align-items-start ps-0">
                    <li className="lh_200 fs_maison fw-light pb-3 c_pointer fs_15 text-white">
                      Drive More Awareness
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Get more Customers
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Build Your Brand
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      mprove your reputation
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Track Results
                    </li>
                  </ul>
                </Col>
                <Col xl={3} lg={4} xs={6}>
                  <h5 className="text-white ff_maison fs_12 fw-medium mt-3 mt-sm-0 lh_108 mb-0 mb-4 text-uppercase">
                    who we help
                  </h5>
                  <ul className="d-flex flex-column align-items-start ps-0">
                    <li className="lh_200 fs_maison fw-light pb-3 c_pointer fs_15 text-white">
                      Digital Advertising
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Search Engine Ranking
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Content Marketing
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Programic Advertising
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Email Marketing
                    </li>
                  </ul>
                </Col>
                <Col xl={3} lg={4} xs={6}>
                  <h5 className="text-white mt-3 mt-lg-0 ff_maison fs_12 fw-medium lh_108 mb-0 mb-4 text-uppercase">
                    why venveo
                  </h5>
                  <ul className="d-flex flex-column align-items-start ps-0">
                    <li className="lh_200 fs_maison fw-light pb-3 c_pointer fs_15 text-white">
                      About Us
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Careers
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Growth Studies
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Testimonials
                    </li>
                  </ul>
                </Col>
                <Col xl={3} lg={4} xs={6}>
                  <h5 className="text-white mt-xl-0 mt-3 ff_maison fs_12 fw-medium lh_108 mb-0 mb-4 text-uppercase">
                    resources
                  </h5>
                  <ul className="d-flex flex-column align-items-start ps-0">
                    <li className="lh_200 fs_maison fw-light pb-3 c_pointer fs_15 text-white">
                      Articles
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      News
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Webinars
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      EBooks
                    </li>
                    <li className="lh_200 fs_maison fw-light c_pointer pb-3 fs_15 text-white">
                      Podcast
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col xxl={4} xl={12} lg={10}>
              <div className="d-flex flex-column pt-md-4 pt-xl-0 align-items-xxl-center align-items-start">
                <p className="text-white text-center fs_30 ff_maison fw-light lh_normal ls_2 pt-4">
                  Get weekly data — and insights.
                </p>
                <div className="d-flex justify-content-between align-items-center min_h_64 mw_449 rounded_50 bg-transparent mx-xxl-auto border_white mt-3">
                  <input
                    className="bg-transparent footer_input border-0 mw_150 ps-2 mx-auto outline_none text-white"
                    type="text"
                    placeholder="Enter Your Email"
                  />
                  <a
                    className="fw-semibold text_decoration_none fs_15 ff_maison text_green lh_133 pe-4"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt_80 justify-content=-between">
            <Col xl={4} lg={6}>
              <img src={footerlogo} alt="footerlogo" />
              <p className="text-start mt-2 mw_315 text-white fs_13 fw-normal lh_153">
                Venveo is an award-winning digital marketing solutions provider.
                Since 2003. ©2023 Venveo
              </p>
            </Col>
            <Col xl={4} lg={6}>
              <div className="d-flex flex-sm-row flex-column">
                <div className="d-flex pt-4 pt-lg-0 pe-5 flex-column align-items-start">
                  <h6 className="text-white ff_maison fw-medium text-uppercase pb-4 fs_12">
                    Visit
                  </h6>
                  <p className="text-white ff_maison mw_228 lh_153">
                    100 N Main Street #201 <br /> Blacksburg, VA 24060
                  </p>
                </div>
                <div className="d-flex flex-column align-items-start">
                  <h6 className="text-white ff_maison fw-medium mt-sm-0 mt-3 text-uppercase pb-4 fs_12">
                    contact
                  </h6>
                  <p className="text-white ff_maison lh_153 c_pointer  underline_green">
                    info@venveo.com
                  </p>
                  <p className="text-white ff_maison fs_13 ls_2 c_pointer underline_green mb-0 mt-1">
                    1 · 800 · 123 · 4567
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6}>
              <div className="d-flex flex-column  align-items-xxl-end">
                <div className="d-flex mt-4">
                  <p className="text-white ff_maison fs_13  text-capitalize pe-3">
                    All Rights Reserved
                  </p>
                  <p className="text-white ff_maison fs_13  text-capitalize ps-3">
                    Privacy Policy
                  </p>
                </div>
                <div className="d-flex gap-sm-5 gap-3 align-items-center pt-3 justify-content-xl-between">
                  <a href="https://www.facebook.com/venveo/">
                    <img className="big_hover" src={facebook} alt="facebook" />
                  </a>
                  <a href="https://www.instagram.com/venveo/">
                    <img className="big_hover" src={instagram} alt="instagram" />
                  </a>
                  <a href="https://twitter.com/">
                    <img className="big_hover" src={x} alt="x" />
                  </a>
                  <a href="https://www.linkedin.com/company/venveo/">
                    <img className="big_hover" src={linkedin} alt="linkedin" />
                  </a>
                  <a href="https://www.youtube.com/c/Venveo">
                    <img className="big_hover" src={youtube} alt="youtube" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
