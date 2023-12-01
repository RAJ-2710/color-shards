// HSVApicker.js

import React, { useState, useEffect } from 'react';

const HSVApicker = ({ onHsvaChange }) => {
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [value, setvalue] = useState(50);
  const [alpha, setAlpha] = useState(1);

  useEffect(() => {
    onHsvaChange({ hue, saturation, value, alpha });
  }, [hue, saturation, value, alpha, onHsvaChange]);

  const handleHueChange = (event) => setHue(event.target.value);
  const handleSaturationChange = (event) => setSaturation(event.target.value);
  const handlevalueChange = (event) => setvalue(event.target.value);
  const handleAlphaChange = (event) => setAlpha(event.target.value);

  const hueBarColors = `linear-gradient(to right, hsl(0, ${saturation}%, ${value}%), hsl(60, ${saturation}%, ${value}%),
     hsl(120, ${saturation}%, ${value}%), hsl(180, ${saturation}%, ${value}%), hsl(240, ${saturation}%, ${value}%),
     hsl(300, ${saturation}%, ${value}%), hsl(360, ${saturation}%, ${value}%))`;

  return (
    <div style={{ border: 'none', padding: '10px', borderRadius: '5px', width: '222px' }}>
      <div style={{ height: '100px', backgroundColor: `hsla(${hue}, ${saturation}%, ${value}%, ${alpha})`, borderRadius: '5px'}}></div>
      <label>H:<input type="text" style={{ textAlign: 'center', marginLeft: '2px', width: '26px', height: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '2px solid grey', ':active': { border: 'none' }, outline: 'none' }} value={hue} onChange={(e) => setHue(e.target.value)} /></label>
      <label style={{ marginLeft: '10px' }}>S:<input type="text" style={{ textAlign: 'center', marginLeft: '2px', width: '26px', height: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '2px solid grey', ':active': { border: 'none' }, outline: 'none' }} value={saturation} onChange={(e) => setSaturation(e.target.value)} /></label>
      <label style={{ marginLeft: '10px' }}>V:<input type="text" style={{ textAlign: 'center', marginLeft: '2px', width: '26px', height: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '2px solid grey', ':active': { border: 'none' }, outline: 'none' }} value={value} onChange={(e) => setvalue(e.target.value)} /></label>
      <label style={{ marginLeft: '10px' }}>A:<input type="text" style={{ textAlign: 'center', marginLeft: '2px', width: '26px', height: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '2px solid grey', ':active': { border: 'none' }, outline: 'none' }} value={alpha} onChange={(e) => setAlpha(e.target.value)} /></label>
      <input type="range" min="0" max="360" value={hue} onChange={handleHueChange} style={{ background: hueBarColors, WebkitAppearance: 'none', width: '100%', height: '10px', borderRadius: '10px', outline: 'none' }} />
      <input type="range" min="0" max="100" value={saturation} onChange={handleSaturationChange} style={{ background: `linear-gradient(to right, hsl(${hue}, 0%, ${value}%), hsl(${hue}, 100%, ${value}%))`, WebkitAppearance: 'none', width: '100%', height: '10px', borderRadius: '10px' }} />
      <input type="range" min="0" max="100" value={value} onChange={handlevalueChange} style={{ background: `linear-gradient(to right, hsl(${hue}, ${saturation}%, 0%), hsl(${hue}, ${saturation}%, 100%))`, WebkitAppearance: 'none', width: '100%', height: '10px', borderRadius: '10px' }} />
      <input type="range" min="0" max="1" step="0.01" value={alpha} onChange={handleAlphaChange} style={{ background: `linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1))`, WebkitAppearance: 'none', width: '100%', height: '10px', borderRadius: '10px' }} />
    </div>
  );
};

export default HSVApicker;
