import React from 'react'
import Icon from '../ProjectSingleIcon'
import './ProjectIcons.css'

import {SparkScroll, sparkScrollFactory} from '../app-spark';
SparkScroll['Icon'] = sparkScrollFactory(Icon);

const ProjectIcons = ({icons, txtColor}) => (
    <ul className="project-icon">    
      {
        icons.map((icon, i) => {

          // creating a JS OBjecto to feed SparkScroll component
          let secconds = i*100
          let movement = i*5
          let delayTimeStart = `topBottom+${secconds}`
          let delayTimeEnd = `bottomBottom+${secconds}`
          let initialState = {right: '0%', opacity: 0}
          let finalSate = {right: '0%', opacity: 1}


          initialState['right'] = `-${movement}*.2%`
          finalSate['right'] = `${movement}%`

          let timelineProps = {}

          timelineProps[delayTimeEnd] = {...finalSate}
          timelineProps[delayTimeStart] = {...initialState}
          
          return ( 
            <SparkScroll.Icon
              icon={icon}
              key={i}
              timeline={timelineProps}
              txtColor={txtColor}  
            />
          )
        })
      }
    </ul>
  )
export default ProjectIcons