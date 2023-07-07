import React from "react";
import "./BrandingHeader.css";
import branding from "./branding.svg";
import dribbleIcon from "./dribble.svg";

const BrandingHeader = () => (
  <header id='branding-header'>
    <div className='text-col'>
      <img src={branding} alt='Branding' />
      <p>
        I also enjoy making brands, here is a little sample of my latest works.
        you also can see more of it on my dribbble profile.
      </p>
    </div>

    <a href='http://dribbble.com/carlosjunod' className='drible'>
      <span className='visit-me'>Visit me on:</span>
      <img src={dribbleIcon} alt='Dribble account' className='dribble-link' />
    </a>
  </header>
);
export default BrandingHeader;
