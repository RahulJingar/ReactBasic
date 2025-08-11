import React from "react";
import Navbar from "../components/Navbar";
import AllinOne from "../components/AllinOne";
import Home from "../components/Home";
import About from "../components/About";
import AllApp from "../components/AllApp";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";
import Couter from "../components/Couter";
import Signup from "../components/Signup";
import Login from "../components/Login";
import DropDown from "../components/DropDown";
import Hash from "../components/Fetch";
import Fetch from "../components/Fetch";

const Routing = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllinOne />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/count" element={<Couter />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dropDown" element={<DropDown />} />
        <Route path="/fetch" element={<Fetch />} />
        {/* <Route path='/alluser' element={<AllApp/>}/> */}
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Routing;
