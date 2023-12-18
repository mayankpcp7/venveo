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
        <div className="d-flex flex-column ">
          <Tabs
            data-aos="zoom-in"
            data-aos-duration="2500"
            defaultActiveKey="collab"
            id="collab"
            className="mb-5 d-flex flex-column align-items-center py_235"
          >
            <Tab className="illusion" eventKey="home" title="Inclusion">
              {" "}
              <img
                className="collab1 position-absolute"
                id="collab1"
                src={collab1}
                alt="collab1"
              />
              <img
                className="collab2 position-absolute"
                id="collab1"
                src={collab2}
                alt="collab2"
              />
              <img
                className="collab3 position-absolute"
                id="collab1"
                src={collab3}
                alt="collab3"
              />
              <img
                className="collab4 position-absolute"
                id="collab1"
                src={collab4}
                alt="collab4"
              />
              <img
                className="collab5 position-absolute"
                id="collab1"
                src={collab5}
                alt="collab5"
              />
            </Tab>
            <Tab className="Environment" eventKey="profile" title="Environment">
              {" "}
              <img
                className="collab1 position-absolute"
                id="collab1"
                src={collab1}
                alt="collab1"
              />
              <img
                className="collab2 position-absolute"
                id="collab1"
                src={collab2}
                alt="collab2"
              />
              <img
                className="collab3 position-absolute"
                id="collab1"
                src={collab3}
                alt="collab3"
              />
              <img
                className="collab4 position-absolute"
                id="collab1"
                src={collab4}
                alt="collab4"
              />
              <img
                className="collab5 position-absolute"
                id="collab1"
                src={collab5}
                alt="collab5"
              />
            </Tab>
            <Tab className="Diversity" eventKey="contact" title="Diversity">
              {" "}
              <img
                className="collab1 position-absolute"
                id="collab1"
                src={collab1}
                alt="collab1"
              />
              <img
                className="collab2 position-absolute"
                id="collab1"
                src={collab2}
                alt="collab2"
              />
              <img
                className="collab3 position-absolute"
                id="collab1"
                src={collab3}
                alt="collab3"
              />
              <img
                className="collab4 position-absolute"
                id="collab1"
                src={collab4}
                alt="collab4"
              />
              <img
                className="collab5 position-absolute"
                id="collab1"
                src={collab5}
                alt="collab5"
              />
            </Tab>
            <Tab
              eventKey="collab"
              className="Collaboration"
              title="Collaboration"
            >
              {" "}
              <img
                className="collab1 position-absolute"
                id="collab1"
                src={collab1}
                alt="collab1"
              />
              <img
                className="collab2 position-absolute"
                id="collab1"
                src={collab2}
                alt="collab2"
              />
              <img
                className="collab3 position-absolute"
                id="collab1"
                src={collab3}
                alt="collab3"
              />
              <img
                className="collab4 position-absolute"
                id="collab1"
                src={collab4}
                alt="collab4"
              />
              <img
                className="collab5 position-absolute"
                id="collab1"
                src={collab5}
                alt="collab5"
              />
            </Tab>
            <Tab className="Flexibility" eventKey="fifth" title="Flexibility">
              {" "}
              <img
                className="collab1 position-absolute"
                id="collab1"
                src={collab1}
                alt="collab1"
              />
              <img
                className="collab2 position-absolute"
                id="collab1"
                src={collab2}
                alt="collab2"
              />
              <img
                className="collab3 position-absolute"
                id="collab1"
                src={collab3}
                alt="collab3"
              />
              <img
                className="collab4 position-absolute"
                id="collab1"
                src={collab4}
                alt="collab4"
              />
              <img
                className="collab5 position-absolute"
                id="collab1"
                src={collab5}
                alt="collab5"
              />
            </Tab>
            <Tab className="Vibrancy" eventKey="sixth" title="Vibrancy">
              {" "}
              <img
                className="collab1 position-absolute"
                id="collab1"
                src={collab1}
                alt="collab1"
              />
              <img
                className="collab2 position-absolute"
                id="collab1"
                src={collab2}
                alt="collab2"
              />
              <img
                className="collab3 position-absolute"
                id="collab1"
                src={collab3}
                alt="collab3"
              />
              <img
                className="collab4 position-absolute"
                id="collab1"
                src={collab4}
                alt="collab4"
              />
              <img
                className="collab5 position-absolute"
                id="collab1"
                src={collab5}
                alt="collab5"
              />
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Collaboration;
