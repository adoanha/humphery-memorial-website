import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import SendLove from "./components/pages/SendLove";
import Terms from "./components/pages/Terms";
import Donate from "./components/pages/Donate";
import Support from "./components/pages/Support";

function App() {
  return (
    <>
      <Router>
        <ScrollToHashElement />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/send-love" exact element={<SendLove />} />
          <Route path="/terms" exact element={<Terms />} />
          <Route path="/donate" exact element={<Donate />} />
          <Route path="/support" exact element={<Support />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
