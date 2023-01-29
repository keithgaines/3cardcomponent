import React from 'react';

const Tile = ({name, text}) => (
  <div style={{backgroundColor: 'hsl(31, 77%, 52%)'}}>
      <h2>{name}</h2>
      <p>{text}</p>
  </div>
);

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
