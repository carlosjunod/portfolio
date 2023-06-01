import React from 'react'
import './HeaderMenu.css'
import cjlogo from './cj-logo.png'
import {EntypoDribbble, EntypoMedium, EntypoGithub} from 'react-entypo';

const HeaderMenu = ({visible}) => (
 
  <div id="menu" style={visible ? {top:'0px'} : null }>
    <div className="logo-col">
      <img src={cjlogo} alt="Carlos Junod web developer"/>
    </div>

    <ul className="social-network">
      <li><EntypoDribbble/></li>
      <li><EntypoMedium/></li>
      <li><EntypoGithub/></li>
    </ul>
  </div>

)

export default HeaderMenu