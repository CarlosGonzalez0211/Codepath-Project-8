import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateCrewmate from "./pages/create_crewmate.jsx";
import EditCrewmate from "./pages/edit_crewmate.jsx";
import CrewmateGallery from "./pages/crewmate_gallery.jsx";
import CrewmateDetail from "./pages/crewmate_detail.jsx";

function App() {
  return (
    <Router>
      <div className="nav">
        <Link to="/" className="nav-btn">🏠 Home</Link>
        <Link to="/create" className="nav-btn">➕ New Crewmate</Link>
      </div>
      <Routes>
        <Route path="/" element={<CrewmateGallery />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />
        <Route path="/detail/:id" element={<CrewmateDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
