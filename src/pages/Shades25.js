import React, { useState, useEffect } from 'react';
import Picker from '../components/Picker';
import './Shades25.css'
import CopyButton from '../components/CopyButton';
import ToggleButton from '../components/ToggleButton';

const Shades25 = () => {
  const [hsvaValue, setHsvaValue] = useState({hue: 0, saturation: 0, value: 0, alpha: 1})
  const [rgbaValue, setRgbaValue] = useState({red: 0, green: 0, blue: 0, alpha: 1})
  const [hoveredShade, setHoveredShade] = useState('Hover over a shade to see the color');
  const [selectedShade, setSelectedShade] = useState('Click on a shade to see the color');
  const [shades, setShades] = useState([]);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const newHsvaText = `hsva(${hsvaValue.hue}, ${hsvaValue.saturation}%, ${hsvaValue.value}%, ${hsvaValue.alpha})`;
    const newRgbaText = `rgba(${rgbaValue.red}, ${rgbaValue.green}, ${rgbaValue.blue}, ${rgbaValue.alpha})`;
    
    const shadesToBlack = Array.from({length:12}, (_, i)=>{
      const newRed = Math.round(((rgbaValue.red) / 12) * i);
      const newGreen = Math.round(((rgbaValue.green) / 12) * i);
      const newBlue = Math.round(((rgbaValue.blue) / 12) * i);
      return `rgba(${newRed}, ${newGreen}, ${newBlue}, ${rgbaValue.alpha})`;
    });

    const shadesToWhite = Array.from({ length: 12 }, (_, i) => {
      const newRed = Math.round(255 - ((255 - rgbaValue.red) / 12) * i);
      const newGreen = Math.round(255 - ((255 - rgbaValue.green) / 12) * i);
      const newBlue = Math.round(255 - ((255 - rgbaValue.blue) / 12) * i);
      return `rgba(${newRed}, ${newGreen}, ${newBlue}, ${rgbaValue.alpha})`;
    });

    const newShades = [...shadesToBlack, newRgbaText, ...shadesToWhite.reverse()];
    setShades(newShades);

  }, [hsvaValue, rgbaValue]);

  const handleCardHover = (shade) => {
    setHoveredShade(shade);
  };

  const handleCardDown = (shade) => {
    setSelectedShade(shade);
  };
  
  const handleToggle = (value) => {
    setIsToggled(value);
  };

  return (
    <div className={'main-container'}>
      <div className={'flex-container'}>
      <div className={!isToggled ? 'left-container-cards' : 'left-container-stripes'}>
        <div className={!isToggled ? 'shades-container-cards' : 'shades-container-stripes'}>
        {rgbaValue.alpha < 0.5 && (
          <div className={'text-behind-cards'}>
          Sometimes, remaining Invisible is all you need, right ?
        </div>
        )}
            
            
            {shades.map((shade, index) => (
              <div
                key={index}
                className={!isToggled ? 'color-card-cards' : 'color-card-stripes'}
                style={{ backgroundColor: shade, borderColor: shade }}
                onMouseEnter={() => handleCardHover(shade)}
                onMouseLeave={() => handleCardHover('Hover over a shade to see the color')}
                onMouseDown={() => handleCardDown(shade)}
              />
            ))}
        </div>
      </div>
        <div className={'right-container'}>
          <div>
          <div className={'text'}>Choose the type of Pallette</div>
            <br/>
            <ToggleButton onToggle={handleToggle} />
            <br/>
            <br/>
            <div className={'text'}>Pick a color to create a palette of shades</div>
            <br/>
            <div>
              <Picker setHsvaValue={setHsvaValue} setRgbaValue={setRgbaValue} />
            </div>
            <br/>
            <div className={'text'}> Current Shade: 
            <br/>
              <span>{hoveredShade}</span>
            </div>
            <br/>
            <div className={'text'}> Selected Shade: 
            <br/>
              <CopyButton textToCopy={selectedShade} />
              <span> </span>
              <span>{selectedShade}</span>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
}  

export default Shades25;
