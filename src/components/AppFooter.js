import React from "react";
import './FooterStyles.css';

const AppFooter = props => {
  return (
    <footer>
      <a href="http://bridgeschool.io/" target="_blank" rel="noopener noreferrer">
        <img className="footer-logo bridge" src="bridge-logo.svg" alt=""/>
      </a>
      <a href="https://www.womenandcolor.com/" target="_blank" rel="noopener noreferrer">
        <img className="footer-logo womenAndColor" src="wac-logo.svg" alt=""/>
      </a>
    </footer>
  )
}

export default AppFooter;
