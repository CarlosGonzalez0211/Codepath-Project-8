import '../index.css';
import '../App.css';
import { Link } from 'react-router-dom';

export default function CrewmateCard({ crewmate }) {
  return (
    <div className="card">
      <h2>{crewmate.name}</h2>
      <p>Power: {crewmate.power}</p>
      <p>Color: {crewmate.color}</p>
      <Link to={`/detail/${crewmate.id}`}>Details</Link>
      <br />
      <Link to={`/edit/${crewmate.id}`}>Edit</Link>
    </div>
  );
}
