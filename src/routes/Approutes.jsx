import React from "react";
import { Routes, Route } from "react-router-dom";

import Slider from "../component/slider";
import Privacy from "../pages/privacy";
import Courses from "../pages/courses";
import Scholarship from "../pages/scholarship";
import VissionMission from "../pages/vissionMission";
import Testimonial from "../pages/testimonial";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Slider />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/scholarships" element={<Scholarship />} />
      <Route path="/vission" element={<VissionMission />} />
      <Route path="/testimonial" element={<Testimonial/>}/>
    </Routes>
  );
}

export default AppRoutes;
