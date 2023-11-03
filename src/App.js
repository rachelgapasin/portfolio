import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import FeaturedProjects from "./FeaturedProjects";
import Contact from "./Contact";
import Footer from "./Footer";

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
