import React, { Component } from "react";
import "./MyModal.css";
import parse from "html-react-parser";

class MyModal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  onKeyPressed(e) {
    if (e.keyCode === 27) {
      this.props.close();
    }
  }

  _renderImages = (img, i) => {
    // relation betwen text and image using props
    let direction = img.horizontal ? "row" : "column";
    let alignment = img.horizontal ? "flex-end" : "flex-start";

    const distribution = {
      flexDirection: direction,
      alignItems: alignment,
    };

    return (
      <figure key={i} style={distribution}>
        <img src={img.src} alt={img.alt} />
        <figcaption>{img.alt}</figcaption>
      </figure>
    );
  };

  render() {
    return (
      <div
        className='my-modal'
        style={{
          backgroundColor: this.props.content.bg_color,
          color: this.props.content.txt_color,
        }}
        onKeyDown={this.onKeyPressed}
      >
        <div
          id='close'
          onClick={this.props.close}
          style={{ color: this.props.content.txt_color }}
        >
          <span
            style={{ backgroundColor: this.props.content.txt_color }}
          ></span>
          <span
            style={{ backgroundColor: this.props.content.txt_color }}
          ></span>
        </div>

        <div id='modal-container'>
          <h1>{this.props.content.title}</h1>
          {/* images */}
          {this.props.content.imgs.map(this._renderImages)}
          {parse(this.props.content.content)}
        </div>
      </div>
    );
  }
}

export default MyModal;
