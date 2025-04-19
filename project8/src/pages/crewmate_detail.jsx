import '../index.css';
import '../App.css';

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

export default function CrewmateDetail() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching crewmate:', error.message);
      } else {
        setCrewmate(data);
      }
    };

    fetchCrewmate();
  }, [id]);

  if (!crewmate) {
    return <p style={{ textAlign: 'center' }}>Loading crewmate...</p>;
  }

  return (
    <div className="card" style={{ marginTop: '40px' }}>
      <h1>{crewmate.name}</h1>
      <p><strong>Power:</strong> {crewmate.power}</p>
      <p><strong>Color:</strong> {crewmate.color}</p>
      <Link to={`/edit/${crewmate.id}`} style={{ color: '#007bff', fontWeight: 'bold' }}>
        ✏️ Edit
      </Link>
    </div>
  );
}
