import React from "react";
import { EntypoDribbble, EntypoMedium, EntypoGithub } from "react-entypo";

import "./ContactInfo.css";

const ContactInfo = () => (
  <section id='contact-info'>
    <ul id='social'>
      {/* <li>Find me at:</li> */}
      <li className='link'>
        <a href='http://dribbble.com/carlosjunod'>
          <EntypoDribbble />
          <span>Dribbble</span>
        </a>
      </li>
      <li className='link'>
        <a href='http://github.com/carlosjunod'>
          <EntypoGithub />
          <span>GitHub</span>
        </a>
      </li>
    </ul>
  </section>
);

export default ContactInfo;
