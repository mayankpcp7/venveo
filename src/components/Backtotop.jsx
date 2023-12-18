import React from "react";
import { useState } from "react";
const Backtotop = () => {
  const [backTop, setBackTop] = useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      <div>
        {backTop ? (
          <span
            onClick={moveToTop}
            className="position-fixed bottom-0 transition_300 border_white right-0 back z_50 me-4 bottom-3 end-0  mb-4 c_pointer p-md-3 p-2 rounded-5"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 11L12 5L18 11M6 19L12 13L18 19"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Backtotop;
