import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <ul>
      <li className='web'>{`carlosjunod.me - ${new Date().getFullYear()}`}</li>
      <li className='phone'>+1 (321) 352 0116</li>
      <li className='email'>hello@carlosjunod.me</li>
    </ul>
  </footer>
);

export default Footer;
