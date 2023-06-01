import React, { Component } from 'react'
import './ProjectButton.css';

class ProjectButton extends Component { 
  constructor(){
    super()
  }

  state = {
    hover: false
  }

  _openProject(){
    this.props.loadProject(this.props.id)
  }

  _hoverButton(){
    this.setState({hover: true})
  }

  _leaveButton(){
    this.setState({hover: false})
    
  }

  render(){

    // hover button styles
    const normal = {color:this.props.txtColor, borderColor:this.props.txtColor}
    const hover = {backgroundColor:this.props.txtColor , color:this.props.bgColor, borderColor:this.props.bgColor}


    return (
      <button style={this.state.hover ? hover : normal} onClick={()=>this._openProject()} onMouseEnter={this._hoverButton.bind(this)} onMouseLeave={this._leaveButton.bind(this)}>
        see more
      </button>
    )
  }
}

export default ProjectButton