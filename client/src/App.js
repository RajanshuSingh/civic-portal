// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Issues from './pages/Issues';
import Events from './pages/Events';
import Volunteer from './pages/Volunteer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
