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
function App() {
  return (
    <>
      <div>
        <Header />
        <Passion />
        <CoreValues />
        <People />
        <Joinus/>
        <Faq/>
        <Goals/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
