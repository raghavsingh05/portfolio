import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import backgroundImage from "../src/assets/hero-vider-img.png";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />

        {/* Works Section */}
        <div
          className="relative w-full min-h-screen py-14 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
        >
          {/* Background Gradient Fix */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
            }}
          ></div>
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <Works />
          </div>
        </div>

        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
