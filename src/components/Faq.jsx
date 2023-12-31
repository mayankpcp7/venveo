import React from "react";
import { Accordion } from "react-bootstrap";
import redvec from "../assets/images/svg/redvec.png";
const Faq = () => {
  return (
    <>
      <section className="bg-black py_121 px_12">
        <h2
          className="text-center fw-bold fs_80 fw-bold ff_sohne text-uppercase lh_87 mb-4 text-white mb-0"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          Frequently Asked Questions
        </h2>
        <p
          className="text-center mw_433 mx-auto pt-1 ff_maison text-white"
          data-aos="zoom-in-down"
          data-aos-duration="1800"
        >
          Do you have additional questions about PPC management services? Browse
          our FAQ.
        </p>
        <Accordion defaultActivekey="1" className="mw_948 mx-auto px_!2 mt-5">
          <Accordion.Item
            className="mb_30 border_white bg-black"
            evenKey="0"
            data-aos-duration="2000"
            data-aos="zoom-out-up"
          >
            <Accordion.Header>
              <h4 className="ff_maison fs_30 fw-light lh_normal mb-0 text-white">
                What is PPC?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_maison fs_15 fw-normal text-black lh_133 mw_551 ps_41">
                With PPC management services, you receive professional
                management of your PPC strategy and campaigns for a designated
                fee. This management can include strategy development, bid
                management, ad copy, and more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            className="mb_30 border_white bg-black"
            data-aos-duration="2400"
            data-aos="zoom-out-up"
          >
            <Accordion.Header>
              <h4 className="ff_maison fs_30 fw-light lh_normal mb-0 text-white">
                Why invest in PPC?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_maison fs_15 fw-normal text-black lh_133 mw_551 ps_41">
                With PPC management services, you receive professional
                management of your PPC strategy and campaigns for a designated
                fee. This management can include strategy development, bid
                management, ad copy, and more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className="mb_30 border_white bg-black"
            eventKey="2"
            data-aos-duration="2600"
            data-aos="zoom-out-up"
          >
            <Accordion.Header>
              <h4 className="ff_maison fs_30 fw-light lh_normal mb-0 text-white">
                What are PPC services?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_maison fs_15 fw-normal text-black lh_133 mw_551 ps_41">
                With PPC management services, you receive professional
                management of your PPC strategy and campaigns for a designated
                fee. This management can include strategy development, bid
                management, ad copy, and more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className="mb_30 border_white bg-black"
            eventKey="3"
            data-aos-duration="2800"
            data-aos="zoom-out-up"
          >
            <Accordion.Header>
              <h4 className="ff_maison fs_30 fw-light lh_normal mb-0 text-white">
                What do PPC services include?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_maison fs_15 fw-normal text-black lh_133 mw_551 ps_41">
                With PPC management services, you receive professional
                management of your PPC strategy and campaigns for a designated
                fee. This management can include strategy development, bid
                management, ad copy, and more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className="mb_30 border_white bg-black"
            eventKey="4"
            data-aos-duration="3000"
            data-aos="zoom-out-up"
          >
            <Accordion.Header>
              <h4 className="ff_maison fs_30 fw-light lh_normal mb-0 text-white">
                How much do PPC services cost?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_maison fs_15 fw-normal text-black lh_133 mw_551 ps_41">
                With PPC management services, you receive professional
                management of your PPC strategy and campaigns for a designated
                fee. This management can include strategy development, bid
                management, ad copy, and more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className="mb_30 border_white bg-black"
            eventKey="5"
            data-aos-duration="3200"
            data-aos="zoom-out-up"
          >
            <Accordion.Header>
              <h4 className="ff_maison fs_30 fw-light lh_normal mb-0 text-white">
                Why work with a PPC management company?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_maison fs_15 fw-normal text-black lh_133 mw_551 ps_41">
                With PPC management services, you receive professional
                management of your PPC strategy and campaigns for a designated
                fee. This management can include strategy development, bid
                management, ad copy, and more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="d-flex align-items-center justify-content-center mt-5 pt-4">
          <p
            className="text-white ff_maison fs_15 mb-0 text-center"
            data-aos-duration="3000"
            data-aos="zoom-out-up"
          >
            Have another question?
          </p>
          <a
            className="clr_red fw-semibold fs_15 ff_maison ps-3 text_decoration_none contact_hover transition_300"
            data-aos-duration="2800"
            data-aos="zoom-out-up"
            href="#"
          >
            Contact Us <img className="ps-2" src={redvec} alt="redvec" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Faq;
