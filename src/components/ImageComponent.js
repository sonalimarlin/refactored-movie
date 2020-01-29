import React, { Component } from 'react';
const posterFallBack = require('./poster_placeholder.svg');

class ImageComponent extends Component {

  state = {
    src: this.props.src,
    errorCondition: false,
  };
  
    addDefault = (e) => {
      e.target.src = posterFallBack
    }
  
    render() {
      const { poster } = this.props;

      return (
        <img 
          src={poster}
          onError={this.addDefault}
          alt="movie poster"
          height="200px"
          position = "absolute"
          top="0"
          bottom="0"
          margin="auto"
        />
      );
    }
}

export default ImageComponent;