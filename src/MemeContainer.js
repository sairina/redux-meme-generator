import React from 'react';
import MemeForm from './MemeForm';
import { useSelector, useDispatch } from 'react-redux';
import Meme from './Meme';
import './MemeContainer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MemeContainer() {
  const memes = useSelector(st => st.memes);
  const dispatch = useDispatch();

  const add = newMeme => {
    dispatch({ type: "ADD", meme: newMeme });
  };

  const deleteMeme = (id) => {
    dispatch({ type: "DELETE", id })
  }

  const memeList = memes.map(meme => (
    <Meme key={meme.id}
      top={meme.top}
      bottom={meme.bottom}
      url={meme.url}
      deleteMeme={() => deleteMeme(meme.id)} />
  ));

  return (
    <div className="MemeContainer">
      <div className="MemeContainer-Form-Container">
        <h2>Meme Generator!</h2>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <MemeForm add={add} />
          </Col>
          <Col></Col>
        </Row>
      </div>
      <div className="MemeContainer-List">
        {memeList}
      </div>
    </div>
  );
}

export default MemeContainer;
