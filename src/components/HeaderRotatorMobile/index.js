import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import Title from '../Title'
import './HeaderRotatorMobile.css'


class HeaderRotator extends Component{

  state = {
    titles: ['Web Developer', 'Graphic Designer', 'UI Designer', 'JavaScript Developer', 'Latino'],
    title_showing: ['Web Developer']
  }

  componentDidMount() {
    this.interval = setInterval(() => {  
      const items = [...this.state.titles]
      this.setState({
        title_showing: [items[Math.floor(Math.random()*items.length)]]
      }) 
    }, 3000)
  }

  render(){
    return(
      <div id="greeting_box_mobile">
  
          <span className="presentation_mobile">
            <span className="hello_mobile">Hello,</span>
            <span>My name is Carlos Junod, and I'm</span>
          </span>
          <div id="rotator_mobile">
            <CSSTransitionGroup
                transitionName="rotate"
                transitionEnterTimeout={2000}
                transitionLeaveTimeout={2000}
              >  
                <Title key={this.state.title_showing} title={this.state.title_showing}/>                
            </CSSTransitionGroup>
          </div> 
       
          
      </div>
    )
  }

}

export default HeaderRotator