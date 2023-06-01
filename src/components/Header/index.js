import React, { Component } from 'react'
import HeaderRotator from '../HeaderRotator'
import HeaderRotatorMobile from '../HeaderRotatorMobile'
import { CSSTransitionGroup } from 'react-transition-group'
import {SparkScroll, sparkScrollFactory} from '../app-spark'
import ScrollAnimation from '../ScrollAnimation'
import SwipeDown from '../SwipeDown'
import MediaQuery from 'react-responsive'


import HeaderMenu from '../HeaderMenu'
import './header.css'

SparkScroll['HeaderMenu'] = sparkScrollFactory(HeaderMenu);
class Header extends Component {

  state = {
    strokeDashOffset: 0,
    isMenuVisible: false
  }

  componentDidMount() {
    // initialize svg
    var c = this.refs.c;
    var CLength = ~~ c.getTotalLength();
    this.offsetTarget = CLength;
    c.style.strokeDasharray = CLength + ' ' + CLength;

    var j = this.refs.j;
    var JLength = ~~ j.getTotalLength();
    this.offsetTarget = JLength;
    j.style.strokeDasharray = JLength + ' ' + JLength;
  }


  render() {
    return (
      <header id="main_header">
        <SparkScroll.span
          proxy="hero"
          callback={ (ratio) => {
            this.setState({strokeDashoffset: ~~(this.offsetTarget*ratio)}) 
            ratio === 1 ? this.setState({isMenuVisible:true}) : this.setState({isMenuVisible:false})
            }
          }
          timeline={{'topTop':0, 'topTop+150':0}}
          className="carlosjunod-logo-linar"
        >

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" height="400" width="400">
            <path d="M285.75,107.25h-57v108.5h79a52.15,52.15,0,0,1,52,52h0a52.15,52.15,0,0,1-52,52H222l-35.27,120.5s69,.5,100,.5h0a167,167,0,0,0,167-167V107.25H310.25" stroke="#ffffff" strokeWidth="5" fill="none" ref="c" style={{strokeDashoffset: this.state.strokeDashoffset}}/>
            <path d="M298.75,308.25v-40h-67.5a41.62,41.62,0,0,1-41.5-41.5h0a41.62,41.62,0,0,1,41.5-41.5h67.5v-126h-85.5a167,167,0,0,0-167,167h0a167,167,0,0,0,167,167h85.5v-61" stroke="#ffffff" strokeWidth="5" fill="none" ref="j" style={{strokeDashoffset: this.state.strokeDashoffset}}/>
          </svg>
      
        </SparkScroll.span>
        
        <MediaQuery query='(min-device-width: 1224px)' >
          <HeaderRotator />
        </MediaQuery>

        <MediaQuery query='(max-device-width: 420px)'>
          <HeaderRotatorMobile />
        </MediaQuery>        
        
        <MediaQuery query='(min-device-width: 1224px)' >
          <ScrollAnimation/>
        </MediaQuery >

        <MediaQuery query='(max-device-width: 420px)'>
          <SwipeDown />
        </MediaQuery>

        <MediaQuery query='(min-device-width: 1224px)' >
          <HeaderMenu visible={this.state.isMenuVisible}/>
        </MediaQuery>

        
      </header>
  )}

}

export default Header;
