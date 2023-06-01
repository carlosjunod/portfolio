import React from 'react'
import './BrandingProject.css'
import {EntypoDribbble} from 'react-entypo';



const BrandingProject = ({content}) => (
  <a href="#" 
    className="branding-project"
    style={{
      backgroundColor: content.bg_color
    }}    
    >
    
    <img src={content.logo} alt={content.title} className="logo" />

    <span className="bg">
      <img src={content.bg_image} />
    </span>

    <span className="dribbble">
      on dribble
      <EntypoDribbble/>
    </span>

  </a>
  )
export default BrandingProject
