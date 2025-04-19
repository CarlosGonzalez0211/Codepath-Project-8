import '../index.css';
import '../App.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

export default function EditCrewmate() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState({ name: '', power: '', color: '' });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching crewmate:', error.message);
      } else {
        setCrewmate(data || { name: '', power: '', color: '' });
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setCrewmate({ ...crewmate, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('Posts')
      .update(crewmate)
      .eq('id', id);

    if (error) {
      console.error('Error updating crewmate:', error.message);
      return;
    }

    window.location = '/';
  };

  const handleDelete = async () => {
    const { error } = await supabase
      .from('Posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting crewmate:', error.message);
      return;
    }

    window.location = '/';
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Edit Crewmate</h2>
      <form onSubmit={handleUpdate}>
        <input
          name="name"
          value={crewmate.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="power"
          value={crewmate.power}
          onChange={handleChange}
          placeholder="Power"
          required
        />
        <input
          name="color"
          value={crewmate.color}
          onChange={handleChange}
          placeholder="Color"
          required
        />
        <button type="submit">Update</button>
        <button type="button" onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </form>
    </div>
  );
}
