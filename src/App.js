import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <p className="quote text-center fs-2 m-5">
        "Let's create something groundbreaking."
      </p>
      <About />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
