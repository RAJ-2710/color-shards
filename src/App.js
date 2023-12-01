// App.js

import React, { useState } from 'react';
import Picker from './components/Picker';

const App = () => {
  const [hsvaValue, setHsvaValue] = useState({ hue: 0, saturation: 100, value: 50, alpha: 1 });
  const [rgbaValue, setRgbaValue] = useState({ red: 255, green: 0, blue: 0, alpha: 1 });

  return (
    <div>
      {/* Other components */}
      <Picker setHsvaValue={setHsvaValue} setRgbaValue={setRgbaValue} />
      {/* Display HSVA values in App.js */}
      <p>Hue: {hsvaValue.hue}</p>
      <p>Saturation: {hsvaValue.saturation}</p>
      <p>Value: {hsvaValue.value}</p>
      <p>Alpha: {hsvaValue.alpha}</p>

      {/* Display RGBA values in App.js */}
      <p>Red: {rgbaValue.red}</p>
      <p>Green: {rgbaValue.green}</p>
      <p>Blue: {rgbaValue.blue}</p>
      <p>Alpha: {rgbaValue.alpha}</p>
    </div>
  );
};

export default App;
