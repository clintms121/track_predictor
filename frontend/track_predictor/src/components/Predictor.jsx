import { useNavigate } from 'react-router-dom';

function Predictor() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="app-root">
      <header className="app-header">
        <h1 className="unselectable-text">Track Predictor</h1>
      </header>
      <main className="predictor-content">
        <h2 className="unselectable-text">Search for Your Desired Race</h2>
        <input
          className="bg-[#222630] outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] px-6 py-4 w-[480px] text-lg"
          name="text"
          placeholder="Search Database for Upcoming Races"
          type="text"
          style={{ width: '480px', padding: '16px 24px', fontSize: '18px' }}
        />
      </main>
        <div className="bottom-nav">
          <button className="button" onClick={handleBackClick}>Back</button>
        </div>
      <footer className="app-footer">
        <p className="unselectable-text">Created by Clint Stapleton</p>
        <p className="unselectable-text">© 2025 Track Predictor. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Predictor