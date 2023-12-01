import React from 'react';

const Card = ({ color }) => {
  const backgroundColor = `rgba(${color.rgb.r || 0}, ${color.rgb.g || 0}, ${color.rgb.b || 0}, ${color.rgb.a || 1})`;

  return (
    <div style={{ marginTop: '20px', padding: '10px', backgroundColor }}>
    </div>
  );
};

export default Card;
