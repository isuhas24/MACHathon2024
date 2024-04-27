import React, { useState } from "react";
import "./header.css";
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
      <header id="header">
        <img src="Images/logo.jpg" alt="" />
        <div className="icons">
          <MdOutlineQrCodeScanner onClick={toggleScanner} />
          <IoMdCart  />
        </div>
      </header>
      {showScanner && <ScannerComponent  />}
    </div>
  );
};

export default Header;
