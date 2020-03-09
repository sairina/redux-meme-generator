import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = { top: "", bottom: "", url: "" }

function MemeForm({ add }) {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(form => ({
      ...form,
      [name]: value
    }));

  };

  const handleSubmit = e => {
    e.preventDefault();
    add({ ...form, id: uuid() });
    setForm(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="top">Text on top: </label>
        <input
          id="top"
          name="top"
          onChange={handleChange}
          value={form.top}
        />
        <label htmlFor="bottom">Text on bottom: </label>
        <input
          id="bottom"
          name="bottom"
          onChange={handleChange}
          value={form.bottom}
        />
        <label htmlFor="url">URL for image: </label>
        <input
          id="url"
          name="url"
          onChange={handleChange}
          value={form.url}
        />
        <button>Add meme!</button>
      </form>
    </div>
  );
}

export default MemeForm;