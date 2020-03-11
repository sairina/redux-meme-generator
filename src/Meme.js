import React from 'react';
import './Meme.css';

function Meme({ deleteMeme, top, bottom, url }) {
  return (
    <div className="Meme">
      <div className="Meme-Container">
        <img src={url} alt="meme" />
        <div className="Meme-Top">{top}</div>
        <div className="Meme-Bottom">{bottom}</div>
      </div>
      <div className="Meme-Btn">
        <button onClick={deleteMeme}>Delete</button>
      </div>
    </div>
  );
}

export default Meme;