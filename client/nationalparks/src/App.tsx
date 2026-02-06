/** @format */

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/ContactUs";

import Parks from "./pages/Parks/Parks";

const App = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Fixed Header */}
      <Header />

      {/* Body – ONLY this changes */}
      <main style={{ flex: 1, padding: "16px" }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/parks' element={<Parks />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};

export default App;
