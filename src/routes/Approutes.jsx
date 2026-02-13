import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Privacy from "../pages/privacy";
import Courses from "../pages/courses";
import Scholarship from "../pages/scholarship";
import VissionMission from "../pages/vissionMission";
import Testimonial from "../pages/testimonial";
import TermsAndConditions from "../pages/termsandConditions";
import ReturnRefund from "../pages/returnRefund";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
 