import React, { useState, useEffect } from 'react';
import Picker from '../components/Picker';
import Modal from 'react-modal'

const Shades25 = () => {
  const [hsvaValue, setHsvaValue] = useState({hue: 0, saturation: 0, value: 0, alpha: 1})
  const [rgbaValue, setRgbaValue] = useState({red: 0, green: 0, blue: 0, alpha: 1})
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [shades, setShades] = useState([]);

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

    // Combine the two arrays to get the final array with the selected color in the middle
    const newShades = [...shadesToBlack, newRgbaText, ...shadesToWhite.reverse()];
    setShades(newShades);

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
      <div style={{ width: '100%', margin: '0 auto' }}>
        <div
          style={{
            borderRadius: '7px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
            {shades.map((shade, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: shade,
                  width: '20%',
                  height: '15vh',
                  textAlign: 'center',
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <br/>
      <div
        className="color-division"
        style={{ backgroundColor: 'hsla(180, 50%, 50%, 1)' }}
        onClick={openModal}
      >
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
        <Picker setHsvaValue={setHsvaValue} setRgbaValue={setRgbaValue} />
      </Modal>
    </div>
    
  );
}  

export default Shades25;
