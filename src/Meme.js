import React from 'react';

function Meme({ deleteMeme, top, bottom, url }) {
  return (
    <div className="Meme">
      <span>{top}</span>
      <img src={url} alt="meme" />
      <span>{bottom}</span>
      <button onClick={deleteMeme}>Delete</button>
    </div>
  );
}

export default Meme;