import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import NowPlaying from './components/NowPlaying';
import Upcoming from './components/Upcoming';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/detail/:id' element={<MovieDetail />} />
        <Route path='/now-playing' element={<NowPlaying />} />
        <Route path='/now-playing/detail/:id' element={<MovieDetail />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/upcoming/detail/:id' element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
