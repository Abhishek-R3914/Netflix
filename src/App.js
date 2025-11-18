import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import { Horror, Romance, Comedy, Action, Originals } from './url';

import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage - protected */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <div>
                <Navbar />
                <Banner />
                <Rowpost url={Originals} title="Netflix Originals" />
                <Rowpost url={Action} title="Action" isSmall />
                <Rowpost url={Comedy} title="Comedy" isSmall />
                <Rowpost url={Horror} title="Horror" isSmall />
                <Rowpost url={Romance} title="Romance" isSmall />
              </div>
            </ProtectedRoute>
          } 
        />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

