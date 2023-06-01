import React from 'react'
import './TitleProject.css';


const TitleProject = ({ title, txtColor }) => (
  
    <h2 className="title-project" style={{color:txtColor}}>{title}</h2>

)

export default TitleProject