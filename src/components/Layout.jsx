import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../css/layout.css";

const Layout = props => {
  const [btnDisplayStyle, setBtnDisplayStyle] = useState("none");

  useEffect(() => (window.onscroll = () => handleScroll()));

  const handleScroll = () => {
    //show the button on scroll and hide otherwise
    if (document.documentElement.scrollTop > 10) {
      setBtnDisplayStyle("block");
    } else {
      setBtnDisplayStyle("none");
    }
  };

  const handleScrollToTopClick = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <NavBar />
      <div style={{ minHeight: "120vh" }}>{props.children}</div>
      {/* Button in all pages to scroll to top */}
      <Button
        id="scrollToTopBtn"
        onClick={handleScrollToTopClick}
        style={{ display: btnDisplayStyle }}
      >
        <i className="fas fa-arrow-up"></i>
      </Button>
      <Footer />
    </div>
  );
};
export default Layout;
