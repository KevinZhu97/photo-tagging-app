import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import allLevelData from './allLevelData'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Game from './pages/Game'

function App() {

  const [inHome, setInHome] = useState(true);
  const [inGame, setInGame] = useState(false);
  const [inLeaderboard, setInLeaderboard] = useState(false)
  const [characters, setCharacters] = useState([])
  const [level, setLevel] = useState(0);
  const [levelData, setLevelData] = useState(allLevelData)

  // console.log(levelData[level]);


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
                setCharacters={setCharacters}
                setLevel={setLevel}
                levelData={levelData}
                setInHome={setInHome}
                setInGame={setInGame}
                setInLeaderboard={setInLeaderboard}
              />}
            />
            <Route path="/game" element={
              <Game
                level={level}
                setCharacters={setCharacters}
                setInHome={setInHome}
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
