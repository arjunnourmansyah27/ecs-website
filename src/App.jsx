import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Hero from "./Hero";
import WhyECS from "./components/WhyECS";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <WhyECS />
      </div>
    </Router>
  );
}

export default App;