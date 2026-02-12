import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRoutes from "./routes/Approutes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
