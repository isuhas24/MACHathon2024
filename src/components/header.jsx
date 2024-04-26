import React, { useState } from 'react';
import "../styles/index.css";
import "../styles/mobile.css";


const Header = () => {




  return (
    <div className="container1">
      <header id="header">
        <a href="#">
          <img
            src="/Images/logo.PNG"
            alt="logo"
            className="logo-image"
            height="50px"
            width="50px"
          />
        </a>
      </header>
    </div>
  );
};

export default Header;