// // Picker.js

// import React, { useState } from 'react';
// import './Picker.css';

// const Picker = () => {
//   const [selectedOption, setSelectedOption] = useState(0);

//   const handleOptionClick = (index) => {
//     setSelectedOption(index);
//   };

//   const getOptionStyle = (index) => {
//     const baseStyle = {
//       flex: 1,
//       textAlign: 'center',
//       color: 'black',
//       cursor: 'pointer',
//       transition: 'flex 0.3s ease, borderBottom 0.3s ease', // Add transitions for flex and borderBottom properties
//     };

//     if (selectedOption === null || selectedOption === index) {
//       return baseStyle;
//     } else {
//       return {
//         ...baseStyle,
//         flex: 0.1,
//         borderBottomColor: 'transparent',
//       };
//     }
//   };

//   return (
//     <div>
//       {/* Top Division */}
//       <div className="additional-division">
//         <div
//           className="additional-option"
//           onClick={() => handleOptionClick(0)}
//         >
//           RGB
//         </div>
//         <div
//           className="additional-option"
//           onClick={() => handleOptionClick(1)}
//         >
//           HSV
//         </div>
//       </div>

//       {/* Hidden division */}
//       <div className="picker-container">
//         <div
//           className="picker-option"
//           style={getOptionStyle(1)}
//         >
//         </div>
//         <div
//           style={{
//             width: '100px',
//             borderBottom: '2px solid teal',
//           }}
//         >
//         </div>
//         <div
//           className="picker-option"
//           style={getOptionStyle(0)}
//         >
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Picker;
// Picker.js

// Picker.js

import React, { useState } from 'react';
import RGBApicker from './RGBApicker'; // Import the RGBApicker component
import HSVApicker from './HSVApicker'; // Import the HSVApicker component
import './Picker.css';

const Picker = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const renderPickerComponent = () => {
    // Render the corresponding component based on the selected option
    return selectedOption === 0 ? <RGBApicker /> : <HSVApicker />;
  };

  const getOptionStyle = (index) => {
    const baseStyle = {
      flex: 1,
      transition: 'flex 0.4s ease',
    };

    if (selectedOption === null || selectedOption === index) {
      return baseStyle;
    } else {
      return {
        ...baseStyle,
        flex: 0.1,
      };
    }
  };

  return (
    <div className="color-picker-container">
      {/* Top Division */}
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

      {/* Hidden division with dynamic rendering of picker component */}
      <div className="picker-container">
        <div
          className="picker-option"
          style={getOptionStyle(1)}
        >
        </div>
        <div
          className="color-selector-box"
          style={{
            width: '100px',
            borderBottom: '2px solid grey',
          }}
        >
        </div>
        <div
          className="picker-option"
          style={getOptionStyle(0)}
        >
        </div>
      </div>
      {renderPickerComponent()}
    </div>
  );
};

export default Picker;
