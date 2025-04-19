import '../index.css';
import '../App.css';

import { useEffect, useState } from 'react';
import { supabase } from '../client';
import CrewmateCard from "../components/crewmate_card.jsx";

export default function CrewmateGallery() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select()
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching crewmates:', error.message);
      } else {
        setCrewmates(data || []);
      }
    };

    fetchCrewmates();
  }, []);

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Your Crewmates</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {Array.isArray(crewmates) && crewmates.map((c) => (
          <CrewmateCard key={c.id} crewmate={c} />
        ))}
      </div>
    </div>
  );
}
