"use client"
import React, { useState } from 'react';
import '../style.css'
const NameForm = ({ onNameSubmit }) => {
  const [name, setName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    onNameSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Get Info</button>
    </form>
  );
};

export default NameForm;

