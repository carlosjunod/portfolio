import React from "react";
import Icon from "../ProjectSingleIcon";
import "./ProjectIcons.css";

import { SparkScroll, sparkScrollFactory } from "../app-spark";
SparkScroll["Icon"] = sparkScrollFactory(Icon);

const ProjectIcons = ({ icons, txtColor, isFlipped }) => (
  <ul className='project-icon'>
    {icons.map((icon, i) => {
      // creating a JS OBjecto to feed SparkScroll component
      let secconds = i * 100;
      let movement = i * 5;
      let direction = isFlipped ? "right" : "left";
      let delayTimeStart = `topBottom+${secconds}`;
      let delayTimeEnd = `bottomBottom+${secconds}`;
      let initialState = { [direction]: isFlipped ? "0%" : "10%", opacity: 0 };
      let finalSate = { [direction]: isFlipped ? "0%" : "10%", opacity: 1 };

      initialState[direction] = isFlipped
        ? `-${movement * 0.2}%`
        : `${movement * 0.2}%`;
      finalSate[direction] = isFlipped ? `${movement}%` : `-${movement * 2.5}%`;

      let timelineProps = {};

      timelineProps[delayTimeEnd] = { ...finalSate };
      timelineProps[delayTimeStart] = { ...initialState };

      console.log("timelineProps 🥑 ", timelineProps);

      return (
        <SparkScroll.Icon
          icon={icon}
          key={i}
          timeline={timelineProps}
          txtColor={txtColor}
        />
      );
    })}
  </ul>
);
export default ProjectIcons;
