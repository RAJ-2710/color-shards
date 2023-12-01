import React, { useState } from 'react';

const RGBAPicker = () => {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [alpha, setAlpha] = useState(1);

  const handleRedChange = (event) => {
    setRed(event.target.value);
  };

  const handleGreenChange = (event) => {
    setGreen(event.target.value);
  };

  const handleBlueChange = (event) => {
    setBlue(event.target.value);
  };

  const handleAlphaChange = (event) => {
    setAlpha(event.target.value);
  };

  return (
    <div style={{ border: 'none', padding: '10px', borderRadius: '5px', width: '222px' }}>
      <div style={{ height: '100px', backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`, borderRadius: '5px' }}></div>
      <label>
        R:
        <input
          type="text"
          style={{
            textAlign: 'center',
            marginLeft: '2px',
            width: '26px',
            height: '10px',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '2px solid grey',
            ':active': { border: 'none' },
            outline: 'none',
          }}
          value={red}
          onChange={(e) => setRed(e.target.value)}
        />
      </label>
      <label style={{ marginLeft: '10px' }}>
        G:
        <input
          type="text"
          style={{
            textAlign: 'center',
            marginLeft: '2px',
            width: '26px',
            height: '10px',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '2px solid grey',
            ':active': { border: 'none' },
            outline: 'none',
          }}
          value={green}
          onChange={(e) => setGreen(e.target.value)}
        />
      </label>
      <label style={{ marginLeft: '10px' }}>
        B:
        <input
          type="text"
          style={{
            textAlign: 'center',
            marginLeft: '2px',
            width: '26px',
            height: '10px',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '2px solid grey',
            ':active': { border: 'none' },
            outline: 'none',
          }}
          value={blue}
          onChange={(e) => setBlue(e.target.value)}
        />
      </label>
      <label style={{ marginLeft: '10px' }}>
        A:
        <input
          type="text"
          style={{
            textAlign: 'center',
            marginLeft: '2px',
            width: '26px',
            height: '10px',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '2px solid grey',
            ':active': { border: 'none' },
            outline: 'none',
          }}
          value={alpha}
          onChange={(e) => setAlpha(e.target.value)}
        />
      </label>
      <input
        type="range"
        min="0"
        max="255"
        value={red}
        onChange={handleRedChange}
        style={{
          background: `linear-gradient(to right, rgb(0, ${green}, ${blue}), rgb(255, ${green}, ${blue}))`,
          WebkitAppearance: 'none',
          width: '100%',
          height: '10px',
          borderRadius: '10px',
          outline: 'none',
        }}
      />
      <input
        type="range"
        min="0"
        max="255"
        value={green}
        onChange={handleGreenChange}
        style={{
          background: `linear-gradient(to right, rgb(${red}, 0, ${blue}), rgb(${red}, 255, ${blue}))`,
          WebkitAppearance: 'none',
          width: '100%',
          height: '10px',
          borderRadius: '10px',
        }}
      />
      <input
        type="range"
        min="0"
        max="255"
        value={blue}
        onChange={handleBlueChange}
        style={{
          background: `linear-gradient(to right, rgb(${red}, ${green}, 0), rgb(${red}, ${green}, 255))`,
          WebkitAppearance: 'none',
          width: '100%',
          height: '10px',
          borderRadius: '10px',
        }}
      />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={alpha}
        onChange={handleAlphaChange}
        style={{
          background: `linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1))`,
          WebkitAppearance: 'none',
          width: '100%',
          height: '10px',
          borderRadius: '10px',
        }}
      />
    </div>
  );
};

export default RGBAPicker;
