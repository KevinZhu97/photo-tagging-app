import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import allLevelData from './allLevelData'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  const [inHome, setInhome] = useState(false);
  const [inGame, setInGame] = useState(true);
  const [inLeaderboard, setInLeaderboard] = useState(false)
  const [characters, setCharacters] = useState(["Shinya", "Faye", "Mikasa"])
  const [level, setLevel] = useState(0);
  const [levelData, setLevelData] = useState(allLevelData)


  return (
    <div className="App">
      <Router>
        <Navbar 
          inHome={inHome} 
          inGame={inGame} 
          inLeaderboard={inLeaderboard} 
          characters={characters}
        />
        <div className="container">
          <Routes>
            <Route path="/" element={
              <Home 
                setLevel={setLevel}
                levelData={levelData}
                setInHome={setInhome}
                setInGame={setInGame}
                setInLeaderboard={setInLeaderboard}
              />}
            />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
