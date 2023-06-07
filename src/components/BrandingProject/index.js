import React from "react";
import "./BrandingProject.css";
import { EntypoDribbble } from "react-entypo";

const BrandingProject = ({ content }) => (
  <a
    href={content.link}
    target='_blank'
    className='branding-project'
    style={{
      backgroundColor: content.bg_color,
    }}
    rel='noreferrer'
  >
    <img src={content.logo} alt={content.title} className='logo' />

    <span className='bg'>
      <img src={content.bg_image} alt={content.title} />
    </span>

    <span className='dribbble'>
      on dribble
      <EntypoDribbble />
    </span>
  </a>
);
export default BrandingProject;
