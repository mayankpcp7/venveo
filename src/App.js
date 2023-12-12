import "./App.css";
import Header from "./components/Header";
import People from "./components/People";
import "bootstrap/dist/css/bootstrap.min.css";
import Passion from "./components/Passion";
import CoreValues from "./components/CoreValues";
function App() {
  return (
    <>
      <div>
        <Header />
        <Passion />
        <CoreValues />
        <People/>
      </div>
    </>
  );
}

export default App;
