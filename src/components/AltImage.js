import React from 'react';
const posterFallBack = require('../assets/poster_placeholder.svg');

const AltImage = function (props) {
  let posterSrc = props.poster;

  return (
    <img 
      src={posterSrc}
      onError={addDefault}
      alt="movie poster"
      height="200px"
      position = "absolute"
      top="0"
      bottom="0"
      margin="auto"
    />
  );
}

function addDefault(e) {
  console.log(e.target);
  e.target.src = posterFallBack
}

export default AltImage;