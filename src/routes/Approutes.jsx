import React from "react";
import { Routes, Route } from "react-router-dom";

import Slider from "../component/slider";
import Privacy from "../pages/privacy";
import Courses from "../pages/courses";
import Scholarship from "../pages/scholarship";
import VissionMission from "../pages/vissionMission";
import Testimonial from "../pages/testimonial";
import TermsAndConditions from "../pages/termsAndConditions";
import ReturnRefund from "../pages/returnRefund";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Slider />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/scholarships" element={<Scholarship />} />
      <Route path="/vission" element={<VissionMission />} />
      <Route path="/testimonial" element={<Testimonial/>}/>
      <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
      <Route path="/return" element={<ReturnRefund/>}/>
    </Routes>
  );
}

export default AppRoutes;
