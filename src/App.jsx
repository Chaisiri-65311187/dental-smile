// src/App.jsx
import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Team from "./components/Team.jsx";
import Guarantee from "./components/Guarantee.jsx";
import Facility from "./components/Facility.jsx";
import Contact from "./components/Contact.jsx";
import SocialRail from "./components/SocialRail.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Guarantee />
        <Facility />
        <Contact />
      </main>
      <SocialRail />
      <Footer />
    </>
  );
}
