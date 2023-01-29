import React from 'react'
import './index.css'

function Tile(props) {
  return (
    <div className="tile">
      <p>{props.name}
      <br />
      <br />
      {props.text}
      {/* <br />
      <br />
      <br />
      <br /> */}
      <button>Learn More</button></p>
      <br />
    </div>
  );
}

export default Tile;
