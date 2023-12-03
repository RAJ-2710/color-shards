import React, { useState } from 'react';
import './CopyButton.css'

const CopyButton = ({ textToCopy }) => {

  const handleCopyClick = () => {
    if(textToCopy != "Click on a shade to see the color")
    {
        navigator.clipboard.writeText(textToCopy);
    }
  };

  return (
    
    <button className="copy-button" onClick={handleCopyClick}>
        <img src='./images/copy.png' alt="Copy" height="10px" width="12px" />
    </button>
  );
  
};

export default CopyButton;
