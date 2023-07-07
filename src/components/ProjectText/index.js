import React from "react";
import "./ProjectText.css";
import parse from "html-react-parser";

const ProjectText = ({ content, txtColor }) => (
  <p className='content' style={{ color: txtColor }}>
    {parse(content)}
  </p>
);

export default ProjectText;
