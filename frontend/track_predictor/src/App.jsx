import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Predictor from './components/Predictor'
import './App.css'

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/predictor');
  };

  return (
    <div className="app-root">
      <header className="app-header">
        <h1 className="unselectable-text">Track Predictor</h1>
      </header>

      <div className="center-area">
        <button className="button" onClick={handleButtonClick}>Get Started</button>
      </div>
      
      <footer className="app-footer">
        <p className="unselectable-text">Created by Clint Stapleton</p>
        <p className="unselectable-text">© 2025 Track Predictor. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predictor" element={<Predictor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
