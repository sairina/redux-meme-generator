import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const INITIAL_STATE = { top: "", bottom: "", url: "" }

function MemeForm({ add }) {
  const [formData, setFormData] = useState(INITIAL_STATE); // form is a reserved keyword

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    add({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="Form" style={{maxWidth: '600px'}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="top">
          <Form.Label>Text on top</Form.Label>
          <Form.Control type="text" name="top" placeholder="Enter some text!" onChange={handleChange}
            value={formData.top} />
        </Form.Group>
        <Form.Group controlId="bottom">
          <Form.Label>Text on bottom</Form.Label>
          <Form.Control type="text" name="bottom" placeholder="Enter some text!" onChange={handleChange}
            value={formData.bottom} />
        </Form.Group>
        <Form.Group controlId="url">
          <Form.Label>URL for image</Form.Label>
          <Form.Control type="url" name="url" placeholder="Enter URL" onChange={handleChange}
            value={formData.url} />
        </Form.Group>
        {/* NOTE: controlId attribute adds the label's for attribute and the id attribute*/}
        <Button variant="primary" type="submit">Add meme!</Button>
        {/* NOTE: must add type="submit" in order for form to submit... */}
      </Form>
    </div>
  );
}

export default MemeForm;