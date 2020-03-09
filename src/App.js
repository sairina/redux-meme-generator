import React from 'react';
import './App.css';
import MemeForm from './MemeForm';
import { useSelector, useDispatch } from 'react-redux';
import Meme from './Meme';

function App() {
  const memes = useSelector(st => st.memes);
  const dispatch = useDispatch();

  const add = newMeme => {
    dispatch({ type: "ADD", meme: newMeme });
  };

  const deleteMeme = (id) => {
    dispatch({ type: "DELETE", id })
  }

  console.log(memes)
  
  const memeList = memes.map(meme => (
    <Meme key={meme.id} 
      top={meme.top} 
      bottom={meme.bottom} 
      url={meme.url} 
      deleteMeme={() => deleteMeme(meme.id)} />
  ))
  return (
    <div className="App">
      <MemeForm add={add} />
      {memeList}
    </div>
  );
}

export default App;
