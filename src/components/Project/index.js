import React, { Component } from "react";
import "./project.css";
import ProjectImage from "../ProjectImage";
import TitleProject from "../TitleProject";
import ProjectButton from "../ProjectButton";
import ProjectText from "../ProjectText";
import ProjectIcons from "../ProjectIcons";

import { SparkScroll, sparkScrollFactory } from "../app-spark";

//using factory to create custom animated components
SparkScroll["ProjectImage"] = sparkScrollFactory(ProjectImage);
SparkScroll["TitleProject"] = sparkScrollFactory(TitleProject);
SparkScroll["ProjectButton"] = sparkScrollFactory(ProjectButton);
SparkScroll["ProjectText"] = sparkScrollFactory(ProjectText);

class Project extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  _trimContent(txt) {
    return txt.substring(0, 250);
  }

  componentWillMount() {
    const imageFinalPos = { ease: "easeOutQuad" };
    const startPoint = {
      opacity: 0,
      transform: `translate3d(${this.props.x1},${this.props.y1},${this.props.z1})`,
    };
    const endPoint = {
      opacity: 1,
      transform: `translate3d(${this.props.x2},${this.props.y2},${this.props.z2})`,
    };

    imageFinalPos["topBottom"] = { ...startPoint };
    imageFinalPos["bottomBottom-100"] = { ...endPoint };

    this.setState({
      imageFinalPos,
    });
  }

  render() {
    console.log("🥑 is flipped", this.props.isFlipped);
    const { isFlipped } = this.props;
    return (
      <article
        className='project'
        style={{ backgroundColor: this.props.content.bg_color }}
      >
        <>
          <SparkScroll.ProjectImage
            path={this.props.content.image}
            title={this.props.content.title}
            timeline={this.state.imageFinalPos}
          />

          <SparkScroll.TitleProject
            title={this.props.content.title}
            txtColor={this.props.content.txt_color}
            timeline={{
              "topBottom-100": !isFlipped
                ? { right: "0%", opacity: 0 }
                : { left: "0%", opacity: 0 },
              "bottomBottom+200": !isFlipped
                ? { right: "10%", opacity: 1 }
                : { left: "10%", opacity: 1 },
            }}
            isFlipped={!isFlipped}
          />

          <SparkScroll.ProjectButton
            loadProject={this.props.loadProject}
            id={this.props.id}
            timeline={{
              "topBottom-100": { right: "0%", opacity: 0 },
              "bottomBottom+200": { right: "10%", opacity: 1 },
            }}
            txtColor={this.props.content.txt_color}
            bgColor={this.props.content.bg_color}
            isFlipped={!isFlipped}
          />

          <ProjectIcons
            icons={this.props.content.tech}
            txtColor={this.props.content.txt_color}
            isFlipped={!isFlipped}
          />

          <SparkScroll.ProjectText
            content={this._trimContent(this.props.content.content)}
            timeline={{
              "topBottom-100": !isFlipped
                ? { right: "0%", opacity: 0 }
                : { left: "0%", opacity: 0 },
              "bottomBottom+200": !isFlipped
                ? { right: "10%", opacity: 1 }
                : { left: "10%", opacity: 1 },
            }}
            txtColor={this.props.content.txt_color}
          />
        </>
      </article>
    );
  }
}

export default Project;
