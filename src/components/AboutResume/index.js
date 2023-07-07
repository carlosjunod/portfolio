import React from "react";
import { EntypoArrowWithCircleDown } from "react-entypo";
import "./AboutResume.css";

const AboutResume = () => (
  <a href='/carlos_junod_resume.pdf' id='resume' target='_blank'>
    <p>Download my Resume </p> <EntypoArrowWithCircleDown className='arrow' />
  </a>
);

export default AboutResume;
