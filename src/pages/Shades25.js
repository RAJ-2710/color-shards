import React, { useState, useEffect } from 'react';
import Picker from '../components/Picker';
import './Shades25.css'
// import CopyButton from '../components/CopyButton';
import ToggleButton from '../components/ToggleButton';

const Shades25 = () => {
  const [hsvaValue, setHsvaValue] = useState({hue: 0, saturation: 0, value: 0, alpha: 1})
  const [rgbaValue, setRgbaValue] = useState({red: 0, green: 0, blue: 0, alpha: 1})
  const [hoveredShade, setHoveredShade] = useState('Hover over a shade to see the color');
  const [selectedShade, setSelectedShade] = useState('Click on a shade to see the color');
  const [shades, setShades] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

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

  const handleClick = () => {
    setIsSmall(true);
    
    // Update textToCopy before attempting to copy
    const textToCopyUpdated = selectedShade;
  
    if (textToCopyUpdated !== "Click on a shade to see the color") {
      navigator.clipboard.writeText(textToCopyUpdated);
    }
    else
    {
      navigator.clipboard.writeText("'you forgot to select the color !!'");
    }
  
    // Simulate a delay before growing back to normal size
    setTimeout(() => {
      setIsSmall(false);
    }, 100); // Adjust the delay as needed
  };

  return (
    <div className={'main-container'}>
      <div className='flex-container'>
      {rgbaValue.alpha < 0.5 && (
              <div className={'text-behind-cards'}>
                Sometimes, remaining Invisible is all you need, right ?
              </div>)}
      <div className={`left-container ${isToggled ? 'flip' : ''}`}>
        
        <div className={!isToggled ? 'left-container-cards' : 'left-container-stripes'}>
          <div className={!isToggled ? 'shades-container-cards' : 'shades-container-stripes'} 
          // style={!isToggled ? {background: shades[13]} : {background: hoveredShade}}
          >
            
              {shades.map((shade, index) => (
                <div
                  key={index}
                  className={!isToggled ? 'color-card-cards' : 'color-card-stripes'}
                  style={{ backgroundColor: shade, borderColor: shade }}
                  onMouseEnter={() => handleCardHover(shade)}
                  onMouseLeave={() => handleCardHover('Hover over a shade to see the color')}
                  onMouseDown={() => handleCardDown(shade)}/>
              ))}
          </div>
        </div>
        </div>
        <div className={'right-container'}>
          <div>
            <div className={'text'}>
              Choose the type of Pallette
            </div> <div className='br'></div>
            <ToggleButton onToggle={handleToggle} /> <div className='br'></div>
            <div className={'text'}>
              Pick a color to create a palette of shades
            </div> <div className='br'></div>
            <div>
              <Picker setHsvaValue={setHsvaValue} setRgbaValue={setRgbaValue} />
            </div> <div className='br'></div>
            <div>
              <div className={'text'}>
                {window.innerWidth <= 1000 ? null : (
                  <>
                    Current Shade: <br />
                    <span>
                      {hoveredShade}
                    </span>
                  </>
                )}
              </div>
              <div className='br'></div>
              <div className={'text'}>
                Selected Shade:
                <div className='copy-info'>
                  Click below to copy the color
                </div>
                <span
                  className={`space span ${isSmall ? 'text small' : ''}`}
                  onClick={window.innerWidth <= 1000 ? null : handleClick} >
                  {selectedShade}
                </span>
              </div>
            </div>
            <div className='br'></div>
            <div className='compare-box'>
              <div className='hovered-color' style={{ background: hoveredShade === 'Hover over a shade to see the color' ? 'white' : hoveredShade }}></div>
              <div className='selected-color' style={{background: selectedShade}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  

export default Shades25;
