import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/Contact";
import Job from "./components/JobDashboard/Job";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Job />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
