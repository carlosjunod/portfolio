import React from 'react'
import './ProjectImage.css';


const ProjectImage = ({path, title}) => (
  
    <img src={path} alt={title} className="image"/>

)

export default ProjectImage