import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";
import Project from "./components/Projects/Project";
import Why from "./components/Why/Why";

import Youtube from "./components/Youtube/Youtube";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/order"
            element={() => {
              window.location.replace("https://plusova.com/Order.html");
            }}
          />
        </Routes>
        <Landing />
        <Youtube />
        <Project />
        <Why />
        <Offer />
        <Gallery />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
