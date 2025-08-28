import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Hero from "./Hero";
import WhyECS from "./components/WhyECS";
import Banner from "./components/Banner";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <WhyECS />
        <Banner />
        <Footer />
      </div>
    </Router>
  );
}

export default App;