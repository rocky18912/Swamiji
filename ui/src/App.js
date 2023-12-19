import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Disease from "./pages/Disease";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disease" element={<Disease />} />
      </Routes>
    </BrowserRouter>
  );
}
