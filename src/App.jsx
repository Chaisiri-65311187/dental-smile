// src/App.jsx
import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
