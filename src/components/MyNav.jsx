import React from "react";
import { useState } from "react";
import navlogo from "../assets/images/svg/Venveo Logo.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Nav } from "react-bootstrap";
import arrow from "../assets/images/svg/arrow.svg";
import search from "../assets/images/svg/search.svg";
const MyNav = () => {
  const [show, setshow] = useState(true);
  function showNav() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
      <Nav className="bg-white py-4 py-xl-0">
        <div className="d-flex justify-content-end w-100 align-items-center">
          <ul className="d-xl-flex  mb-0 d-none d-block align-items-center list-unstyled">
            <li className="px-3 mx-1">
              <div class="dropdown">
                <a
                  className="ff_maison fw-medium fs_15 text-black text_decoration_none lh_normal"
                  href="#"
                >
                  How We Help <span className="fs_6">▼</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-3 mx-1">
              <div class="dropdown">
                <a
                  className="ff_maison fw-medium fs_15 text-black text_decoration_none lh_normal"
                  href=""
                >
                  Who We Help <span className="fs_6">▼</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-3 mx-1">
              <div class="dropdown">
                <a
                  className="ff_maison fw-medium fs_15 text-black text_decoration_none lh_normal"
                  href=""
                >
                  Why Venveo <span className="fs_6">▼</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-3 mx-1 ">
              <a
                className="fs_15 text-decoration-none text-black ff_maison fw-medium"
                href="you.com"
              >
                Resources
              </a>
            </li>
            <li className="px-3 mx-1">
              <img className="c_pointer scale_high transition_300" src={search} alt="search" />
            </li>

            <button className="bg_parrot ff_maison fw-semibold transition_300 nav_btn border-none ms-3">
              Let’s Talk <img className="pb-1 nav_arrow transition_300" src={arrow} alt="arrow" />
            </button>
          </ul>
          <div
            className="d-flex justify-content-between flex-column d-xl-none menu_box z_index_100 position-relative z_50"
            onClick={showNav}
          >
            <h2 className="clr_red fs_20">
              {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
            </h2>
          </div>
          <ul
            className={`d-flex gap-4 mb-0 bg-white sm_nav mb-0 ps-0 d-xl-none list-unstyled ${
              show ? "" : "start-0"
            }`}
          >
            <li>
              <div class="dropdown">
                <a
                  className="ff_maison fw-medium fs_15 text-black text_decoration_none lh_normal"
                  href=""
                >
                  How We Help <span className="fs_6">▼</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <a
                  className="ff_maison fw-medium fs_15 text-black text_decoration_none lh_normal"
                  href=""
                >
                  Who We Help <span className="fs_6">▼</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <a
                  className="ff_maison fw-medium fs_15 text-black text_decoration_none lh_normal"
                  href=""
                >
                  Why Venveo<span className="fs_6">▼</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item ff_maison fw-medium fs_15 text-black lh_normal"
                      href="#"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                className="fs_15 text-black text-decoration-none ff_maison fw-medium"
                href="you.com"
              >
                Resources
              </a>
            </li>
            <li>
              <img className="c_pointer" src={search} alt="search" />
            </li>

            <button className="bg_parrot ff_maison fw-semibold nav_btn border-none">
              Let’s Talk <img className="pb-1" src={arrow} alt="arrow" />
            </button>
          </ul>
        </div>
      </Nav>
    </>
  );
};

export default MyNav;
