import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Areas from "../components/Areas";
const Landing = () => {
  return (
    <div>
      <div className="bg-heroback">
        <Navbar />
        <Hero />
      </div>

      <Analytics />
      <Services />
      <Areas />
      {/* <Cards /> */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Landing;
