import collab1 from "../assets/images/png/collab1.png";
import collab2 from "../assets/images/png/collab2.png";
import collab3 from "../assets/images/png/collab3.png";
import collab4 from "../assets/images/png/collab4.png";
import collab5 from "../assets/images/png/collab5.png";
import React from "react";
import blueline from "../assets/images/png/collaboration.png";
import { Tabs, Tab } from "react-bootstrap";
const Collaboration = () => {
  return (
    <>
      <section className="position-relative">
        <img className="w-100" src={blueline} alt="blueline" />
        <div className="d-flex flex-column pt-xl-5 mt-3 ">
          <Tabs
            data-aos="zoom-in"
            data-aos-duration="2500"
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-5 d-flex flex-column align-items-center"
          >
            <Tab className="illusion" eventKey="home" title="Inclusion"></Tab>
            <Tab
              className="Environment"
              eventKey="profile"
              title="Environment"
            ></Tab>
            <Tab
              className="Diversity"
              eventKey="contact"
              title="Diversity"
            ></Tab>
            <Tab
              className="Collaboration"
              eventKey="fourth"
              title="Collaboration"
            ></Tab>
            <Tab
              className="Flexibility"
              eventKey="fifth"
              title="Flexibility"
            ></Tab>
            <Tab className="Vibrancy" eventKey="sixth" title="Vibrancy"></Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Collaboration;
