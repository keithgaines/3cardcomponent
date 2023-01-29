import React from 'react';


function Tile(props) {
  return (
    <div className="tile">
      <p>{props.name}
      <br />
      <br />
      {props.text}</p>
    </div>
  );
}

export default Tile;
