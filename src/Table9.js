// Table.js
import React from 'react';
import Chair from './Chair';
import Card from './Card';
import './css/Table.css';
import './css/App.css';
import TableImage from './images/table.png';
import { io } from 'socket.io-client';

const Table9 = () => {
  
  
  return (
    <div className="table-centerer">
      <header className='App-header'> </header>
      <div className="table-container">
      <img src={TableImage} className="table"/>
      <Chair position="top-left" />
        <Chair position="top"/>
        <Chair position="top-right" />
        <Chair position="right-bottom" />
        <Chair position="right-top" />
        <Chair position="bottom" />
        <Chair position="bottom-right" />
        <Chair position="bottom-left" />
        <Chair position="left-bottom" />
        <Chair position="left-top" />
        <Card position="top"/>
        <Card position="top-second"/>
        <Card position="top-right"/>
        <Card position="top-right-second"/>
        <Card position="bottom-right"/>
        <Card position="bottom-right-second"/>

      </div>
    </div>
  );
};

export default Table9;
