import React from 'react'
import './title.css';

class Title extends React.Component {

  render() {
    return (
      <div className="la">{this.props.title}</div>
    )

  }
}

export default Title