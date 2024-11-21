// Chair.js
import React, { useState } from "react";
import "./css/Chair.css";
import styles from "./css/Chair.module.css";

import AvatatImage from "./images/boy.png";
import { connectWebSocket } from "./socketHandler";

const chairMap = new Map();
chairMap.set("top-right", 1);
chairMap.set("right-top", 2);
chairMap.set("right-bottom", 3);
chairMap.set("bottom-right", 4);
chairMap.set("bottom", 5);
chairMap.set("bottom-left", 6);
chairMap.set("left-bottom", 7);
chairMap.set("left-top", 8);
chairMap.set("top-left", 9);

function Chair({ position }) {
  const [isOccupied, setIsOccupied] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const index = chairMap.get(position);

  const handleSeatClick = () => {
    if (!isOccupied) {
      const tableId = "1";
      connectWebSocket(
        "http://localhost:5000",
        tableId,
        index,
        "playerId",
        500
      );
      setAvatar(AvatatImage); // Replace with a real avatar URL
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
      {isOccupied ? (
        <img src={avatar} alt="Avatar" className={styles.avatar} />
      ) : (
        "Seat"
      )}
    </button>
  );
}

export default Chair;
