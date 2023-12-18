import "./App.css";
import Header from "./components/Header";
import People from "./components/People";
import "bootstrap/dist/css/bootstrap.min.css";
import Passion from "./components/Passion";
import CoreValues from "./components/CoreValues";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import Faq from "./components/Faq";
import Joinus from "./components/Joinus";
import Aboutus from "./components/Aboutus";
import Preloader from "./components/Preloader";
import Collaboration from "./components/Collaboration";
import Websites from "./components/Websites";
import Backtotop from "./components/Backtotop";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({ once: true, disable: "mobile" });
    Aos.refresh();
  }, []);
  return (
    <>
      <div>
        <Preloader />
        <Header />
        <Passion />
        <CoreValues />
        <People />
        {/* <Collaboration/> */}
        <Websites />
        <Aboutus />
        <Joinus />
        <Faq />
        <Goals />
        <Footer />
        <Backtotop />
      </div>
    </>
  );
}

export default App;
