import React from 'react'
import './index.css'

function Tile(props) {
  return (
    <div className="tile">
      <p><h2>{props.name}</h2>
      <br />
      <br />
      {props.text}
      <button>Learn More</button></p>
      <br />
    </div>
  );
}

export default Tile;
