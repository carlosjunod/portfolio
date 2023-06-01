import React from 'react'
import './ProjectText.css';


const ProjectText = ({content, txtColor}) => (
  <p className="content" style={{color:txtColor}}>
    {content}
  </p>
)

export default ProjectText