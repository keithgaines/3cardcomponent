import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tile from './Tile';
import WebFont from 'webfontloader';


WebFont.load({
google: {
families: ["Lexend Deca:400"]
}
});

WebFont.load({
google: {
families: ["Big Shoulders Display:700"]
}
});

// const TileRow = ({children}) => (
//   <div style={{display: 'flex', flexDirection: 'row'}}>
//     {children}
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
<div className='tile1'>
<img src='icon-sedans.svg' alt='sedan image'/>
<Tile
name="Sedan" 
text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
 or on your next road trip."/></div>
<div className='tile2'>
<img src='icon-suvs.svg' />
<Tile 
name="SUVs" 
text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
 and off-road adventures." />
</div>
<div className='tile3'>
<img src='icon-luxury.svg'></img>
<Tile 
name="Luxury" 
text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
 rental and arrive in style." />
</div>
</div>
);