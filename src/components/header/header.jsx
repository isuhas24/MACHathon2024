import React, { useState } from "react";
import "./header.css";
import { Link, BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import ScannerComponent from "../Scanner/scanner";

const Header = () => {
  const [showScanner, setShowScanner] = useState(false);

  const toggleScanner = () => {
    setShowScanner(!showScanner);
  };

  return (
    <div className="Headercontainer">
      <BrowserRouter>
        {" "}
        <header id="header">
          <Link to="/">
            <img src="Images/logo.jpg" alt="" />
          </Link>
          <div className="icons">
            <MdOutlineQrCodeScanner onClick={toggleScanner} />
            <Link to="/cart">
              {" "}
              <IoMdCart />
            </Link>
          </div>
        </header>
      </BrowserRouter>
      {showScanner && <ScannerComponent />}
    </div>
  );
};

export default Header;
