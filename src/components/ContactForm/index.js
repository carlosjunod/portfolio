import React, { Component } from 'react'
import './ContactForm.css'


class ContactFrom extends Component{ 


  // the state is pre defined by the name of the inputs field
  // TODO: make it dinamic
  state = {
    name: false,
    email: false,
    message: false
  }
  
  _focusHandlerIn(field){
    const input = field.target.name
    // setting the state according the name input
    this.setState({ [input] : true})
  }  

  _focusHandlerOut(field){
    const input = field.target.name
    if (!field.target.value) {
      // setting the state according the name input      
      this.setState({ [input] : false})
    }    
  }  

  render(){
    return(
      <section id="contact-form">

        <form action="post">
          <h3>Let's talk...</h3>
          <p className={this.state.name ? 'active' : null }>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" 
              onFocus={(input) => this._focusHandlerIn(input)}
              onBlur={(input) => this._focusHandlerOut(input)}/>
          </p>
          <p className={this.state.email ? 'active' : null }>
            <label htmlFor="email">e-mail</label>        
            <input type="email" name="email" id="email" 
              onFocus={(input) => this._focusHandlerIn(input)}
              onBlur={(input) => this._focusHandlerOut(input)}/>
          </p>
          <p className={this.state.message ? 'active' : null }>
            <label htmlFor="message">message</label>        
            <textarea name="message" defaultValue="" id="message" 
              onFocus={(input) => this._focusHandlerIn(input)}
              onBlur={(input) => this._focusHandlerOut(input)}>
            </textarea>
          </p>
          <input type="submit" value="submit" className="submit"/>
        </form>
      </section>
    )}

}

export default ContactFrom