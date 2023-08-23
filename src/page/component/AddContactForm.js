import React, { useState } from 'react';

const AddContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    
    onAdd({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddContactForm;