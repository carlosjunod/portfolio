import React, { Component } from 'react'
import './ProjectMobile.css'
import ProjectImage from '../ProjectImage'
import TitleProject from '../TitleProject'
import ProjectButton from '../ProjectButton'
import ProjectText from '../ProjectText'
import ProjectIcons from '../ProjectIcons'

import {SparkScroll, sparkScrollFactory} from '../app-spark';

//using factory to create custom animated components
SparkScroll['ProjectImage'] = sparkScrollFactory(ProjectImage);
SparkScroll['TitleProject'] = sparkScrollFactory(TitleProject);
SparkScroll['ProjectButton'] = sparkScrollFactory(ProjectButton);
SparkScroll['ProjectText'] = sparkScrollFactory(ProjectText);

class Project extends Component {
  constructor(){
    super()
    this.state = {
      visible: false
    }
  }

  _trimContent(txt){
    return txt.substring(0, 250);
  }

  componentWillMount(){

    const imageFinalPos = {ease:'easeOutQuad'}
    const startPoint = {
        opacity: 0,
        transform: `translate3d(${this.props.x1},${this.props.y1},${this.props.z1})`
    }
    const endPoint = {
        opacity: 1,
        transform: `translate3d(${this.props.x2},${this.props.y2},${this.props.z2})`
      
    }

    imageFinalPos['topBottom'] = {...startPoint}
    imageFinalPos['bottomBottom'] = {...endPoint}


    this.setState({
      imageFinalPos
    })
  }

  render(){
    return (
    <article className="project"   style={{backgroundColor:this.props.content.bg_color}}>
      <SparkScroll.TitleProject
        title={this.props.content.title}
        txtColor={this.props.content.txt_color}
        timeline={{
          'topBottom-200': {right: '0%', opacity: 0},
          'topCenter': {right: '10%', opacity: 1}          
        }}
      />

      <ProjectIcons
        icons={this.props.content.tech}
        txtColor={this.props.content.txt_color}
      />

      <SparkScroll.ProjectText
        content={this._trimContent(this.props.content.content)}      
        timeline={{
          'topBottom-200': {right: '0%', opacity: 0},
          'topCenter': {right: '10%', opacity: 1}          
        }}
        txtColor={this.props.content.txt_color}
      />

      <SparkScroll.ProjectButton
        loadProject={this.props.loadProject}
        id={this.props.id}
        timeline={{
          'topBottom-200': {right: '0%', opacity: 0},
          'topCenter': {right: '10%', opacity: 1}          
        }}
        txtColor={this.props.content.txt_color}
        bgColor={this.props.content.bg_color}        
      />

      <SparkScroll.ProjectImage
        path={this.props.content.image}
        title={this.props.content.title}
        timeline={this.state.imageFinalPos}
      />
     
      
    </article>
    )
  }
}

export default Project
