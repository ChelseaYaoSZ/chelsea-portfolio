import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />    
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>        
    </Router>
  );
}

export default App;
