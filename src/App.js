import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";
import Project from "./components/Projects/Project";
import Why from "./components/Why/Why";

import Youtube from "./components/Youtube/Youtube";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <Youtube />
      <Project />
      <Why />
      {/* <Offer /> */}
      <Footer />
    </div>
  );
}

export default App;
