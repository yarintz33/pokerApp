// Chair.js
import React, { useState } from 'react';
import './css/Chair.css';
import styles from './css/Chair.module.css'; 

import AvatatImage from './images/avatar.png';


function Chair({ position }) {
    const [isOccupied, setIsOccupied] = useState(false);
    const [avatar, setAvatar] = useState(null);
    
    const handleSeatClick = () => {
      if (!isOccupied) {
        setAvatar(AvatatImage);  // Replace with a real avatar URL
        setIsOccupied(true);
      }
    };

  return (
  <button 
  className={`chair ${position}`} 
      onClick={handleSeatClick} 
      disabled={isOccupied}
    >
      {/* Display either the text 'Seat' or the avatar when occupied */}
      {isOccupied ? <img src={avatar} alt="Avatar" className={styles.avatar} /> : 'Seat'}
    </button>
  )
  
};

export default Chair;
