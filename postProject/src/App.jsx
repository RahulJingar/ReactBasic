import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchData from "./components/FetchData";
import PostDetails from "./components/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FetchData />} />
        <Route path="/data/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
