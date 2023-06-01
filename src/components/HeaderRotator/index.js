import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import Title from '../Title'
import './HeaderRotator.css'


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
      <div id="greeting_box">
        <div className="greeting line">Hello,
          <span className="presentation">My name is Carlos Junod,</span>
        </div>
        
        <div className="presentation line">and I'm
          <div id="rotator">
            <CSSTransitionGroup
                transitionName="rotate"
                transitionEnterTimeout={2000}
                transitionLeaveTimeout={2000}
              >  
                <Title key={this.state.title_showing} title={this.state.title_showing}/>                
            </CSSTransitionGroup>
          </div>            
                  
        </div>      
      </div>
    )
  }

}

export default HeaderRotator