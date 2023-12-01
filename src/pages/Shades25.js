import React, { useState, useEffect } from 'react';
import Picker from '../components/Picker';
import Modal from 'react-modal'

const Shades25 = () => {
  const [hsvaValue, setHsvaValue] = useState({hue: 0, saturation: 0, value: 0, alpha: 1})
  const [rgbaValue, setRgbaValue] = useState({red: 0, green: 0, blue: 0, alpha: 1})
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [hsvaText, setHsvaText] = useState('');
  const [rgbaText, setRgbaText] = useState('');

  useEffect(() => {
    // Combine H, S, V, A into a single text-field for HSV
    const newHsvaText = `hsva(${hsvaValue.hue}, ${hsvaValue.saturation}%, ${hsvaValue.value}%, ${hsvaValue.alpha})`;
    setHsvaText(newHsvaText);

    // Combine R, G, B, A into a single text-field for RGBA
    const newRgbaText = `rgba(${rgbaValue.red}, ${rgbaValue.green}, ${rgbaValue.blue}, ${rgbaValue.alpha})`;
    setRgbaText(newRgbaText);
  }, [hsvaValue, rgbaValue]);


  const openModal = (event) => {
    setModalIsOpen(true);
  
    const maxTop = window.innerHeight - 248; // 248 is the modal height
    const maxLeft = window.innerWidth - 260; // 244 is the modal width
  
    const top = Math.min(event.clientY, maxTop);
    const left = Math.min(event.clientX, maxLeft);
  
    setModalPosition({ top, left });
  };
  
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="color-division" style={{ backgroundColor: 'hsla(180, 50%, 50%, 1)' }} onClick={openModal}>
        Select Color
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Color Picker Modal"
        style={{
          content: {
            width: '244px',
            height: '248px',
            borderRadius: '10px',
            padding: 0,
            margin: 0,
            boxShadow: '0 2px 4px 4px rgba(0, 0, 0, 0.1)',
            top: modalPosition.top,
            left: modalPosition.left,
          },
        }}
      >
        {/* Render the Picker inside the modal */}
        <Picker setHsvaValue={setHsvaValue} setRgbaValue={setRgbaValue} />
      </Modal>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna sed lectus cursus accumsan a in odio. Integer vel leo sit amet arcu hendrerit iaculis. Duis efficitur tincidunt nulla id convallis. Etiam vel justo a mauris imperdiet posuere. Suspendisse vitae metus ac justo efficitur scelerisque. Morbi vel velit vitae nisl tincidunt tristique. Sed fermentum justo vitae orci malesuada, vel tincidunt est scelerisque. Nulla facilisi. Aliquam non justo a erat eleifend suscipit. Suspendisse potenti. Proin vel tristique metus. In hac habitasse platea dictumst. Vivamus gravida tortor eu lacus tempus, id facilisis nisi auctor. Quisque cursus nulla vel elit elementum, a cursus metus posuere. Curabitur luctus malesuada augue, ac efficitur metus eleifend in.
    <br/>
    {hsvaText}
    {rgbaText}
    </div>
  );
};

export default Shades25;
