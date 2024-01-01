import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Disease from "./pages/Disease";
import Portfolio from "./pages/Portfolio";
import RupantranYatra from "./pages/RupantranYatra";
import AllPrograms from "./pages/AllPrograms";
import AllAwards from "./pages/AllAwards";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/rupantranyatra" element={<RupantranYatra />} />
        <Route path="/allawards" element={<AllAwards />} />
        <Route path="/allprogs" element={<AllPrograms />} />
      </Routes>
    </BrowserRouter>
  );
}
