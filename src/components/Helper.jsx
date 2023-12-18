import img1 from "../assets/images/png/slider.png";
import img2 from "../assets/images/png/slider2.png";
import img3 from "../assets/images/png/slider3.png";
import img4 from "../assets/images/png/slider4.png";
import icon1 from "../assets/images/png/remote.png";
import icon2 from "../assets/images/png/employ.png";
import icon3 from "../assets/images/png/engagement.png";
import icon4 from "../assets/images/png/bright.png";
export const sliderData = [
  {
    id: 1,
    img: img1,
    icons: icon1,
    head: "100% Remote",
    pera: "Remote work is here to stay at Venveo. Our team is extremely geodiverse, and all employees (including locals) have the opportunity for 100% remote work.",
  },
  {
    id: 2,
    img: img2,
    icons: icon2,
    head: "Higher Employee Retention",
    pera: "We work hard to create a work culture that feels like home. And we do that pretty well, with the average employee staying 4 years.",
  },
  {
    id: 3,
    img: img3,
    icons: icon3,
    head: "Strong Employee Engagement",
    pera: "Our team members do more than show up. They're motivated to grow Venveo and produce maximum results for our clients and company.",
  },
  {
    id: 4,
    img: img4,
    icons: icon4,
    head: "A Bright Future Ahead",
    pera: "Venveo has experienced a 320% growth rate in the last three years. This record increase applies to both employees and clients, making it an exciting time to join us.",
  },
];
export const Nextbtn = () => {
  return (
    <svg
      class="next_btn"
      width="41"
      height="98"
      viewBox="0 0 61 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71 0H25C11.1929 0 0 11.1929 0 25V93C0 106.807 11.1929 118 25 118H71V0Z"
        fill="white"
      ></path>
      <path d="M40 58.9966L30 64L30 54L40 58.9966Z" fill="#231F20"></path>
    </svg>
  );
};
export const Backbtn = () => {
  return (
    <svg
      class="prev_btn"
      width="41"
      height="98"
      viewBox="0 0 61 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-10 0H36C49.8071 0 61 11.1929 61 25V93C61 106.807 49.8071 118 36 118H-10V0Z"
        fill="white"
      ></path>
      <path d="M21 58.9966L31 64L31 54L21 58.9966Z" fill="#231F20"></path>
    </svg>
  );
};
