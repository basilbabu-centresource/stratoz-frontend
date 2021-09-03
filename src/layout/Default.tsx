import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const LayoutDefault: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutDefault;
