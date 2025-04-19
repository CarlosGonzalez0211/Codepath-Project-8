import '../index.css';
import '../App.css';

import { useState } from 'react';
import { supabase } from '../client';

export default function CreateCrewmate() {
  const [crewmate, setCrewmate] = useState({ name: '', power: '', color: '' });

  const handleChange = (e) => {
    setCrewmate({ ...crewmate, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('Posts')
      .insert(crewmate)
      .select();

    if (error) {
      console.error('Error creating crewmate:', error.message);
      return;
    }

    window.location = '/';
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Create a New Crewmate</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="power" placeholder="Power" onChange={handleChange} required />
        <input name="color" placeholder="Color" onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
