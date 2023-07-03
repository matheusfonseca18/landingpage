import "./App.css";
import "./Components/NavBar";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Sec1 from "./Components/Sec1";
import Sec2 from "./Components/Sec2";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App" id="top">
      <NavBar />
      <ScrollToTopButton />
      <Home />
      <Sec1 />
      <Sec2 />

      <Footer />
    </div>
  );
}

export default App;
