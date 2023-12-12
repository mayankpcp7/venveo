import React from "react";
import { Row,Col } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <footer className="bg_darksky">
        <div className=" mx_footer">
          <Row>
            <Col xxl={8}>
              <Row>
                <Col xl={3}>
                  <h5 className="text-white ff_maison fs_12 fw-medium lh_">
                    how we help
                  </h5>
                  <ul></ul>
                </Col>
              </Row>
            </Col>
            <Col xxl={4}></Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
