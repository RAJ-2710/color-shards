import React, { useState } from 'react';
import './ToggleButton.css'

const ToggleButton = ({ onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    onToggle(!isToggled);
  };

  return (
    <button onClick={handleToggle} className={isToggled ? 'toggled' : 'not-toggled'}>
    {isToggled ? 'Cards' : 'Stripes'}
    </button>
  );
};

export default ToggleButton;
