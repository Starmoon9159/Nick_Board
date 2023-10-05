import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [isLinksVisible, setLinksVisible] = useState(false);

  const toggleLinks = () => {
    setLinksVisible(!isLinksVisible);
  };

  return (
    <div>
      <div className="mobile-container">
        <div className="topnav">
       
          <Link to="/" className="active">
            地圖創作 丨 Maps
          </Link>
          <div id="myLinks" style={{ display: isLinksVisible ? 'block' : 'none' }}>
         
            <Link to="/report">Report</Link>
            <Link to="/nick">Nick</Link>
            <Link to="/">Home</Link>
          </div>
          <a href="javascript:void(0);" className="icon" onClick={toggleLinks}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
