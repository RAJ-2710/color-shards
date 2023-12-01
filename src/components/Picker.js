import React, { useState } from 'react';
import RGBApicker from './RGBApicker'; // Import the RGBAPicker component
import HSVApicker from './HSVApicker'; // Import the HSVApicker component
import './Picker.css';

const Picker = ({ setHsvaValue, setRgbaValue }) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleHsvaChange = (hsva) => {
    setHsvaValue(hsva); // Set HSVA values in App.js
  };

  const handleRgbaChange = (rgba) => {
    setRgbaValue(rgba); // Set RGBA values in App.js
  };

  const renderPickerComponent = () => {
    // Render the corresponding component based on the selected option
    return selectedOption === 0 ? <RGBApicker onRgbaChange={handleRgbaChange} /> : <HSVApicker onHsvaChange={handleHsvaChange} />;
  };

  const getOptionStyle = (index) => {
    const baseStyle = {
      flex: 1,
      textAlign: 'center',
      color: 'black',
      cursor: 'pointer',
      transition: 'flex 0.3s ease, borderBottom 0.3s ease',
    };

    if (selectedOption === null || selectedOption === index) {
      return baseStyle;
    } else {
      return {
        ...baseStyle,
        flex: 0.1,
        borderBottomColor: 'transparent',
      };
    }
  };

  return (
    <div className="color-picker-container">
      <div className="additional-division">
        <div
          className={`additional-option ${selectedOption === 0 ? 'selected' : ''}`}
          onClick={() => handleOptionClick(0)}
        >
          RGB
        </div>
        <div
          className={`additional-option ${selectedOption === 1 ? 'selected' : ''}`}
          onClick={() => handleOptionClick(1)}
        >
          HSV
        </div>
      </div>

      <div className="picker-container">
        <div className="picker-option" style={getOptionStyle(1)}></div>
        <div className="color-selector-box" style={{ width: '100px', borderBottom: '2px solid teal' }}></div>
        <div className="picker-option" style={getOptionStyle(0)}></div>
      </div>
      {renderPickerComponent()}
    </div>
  );
};

export default Picker;
