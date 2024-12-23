import React from 'react';
import Navbar from './components/Header/Navbar';
import './App.css';
import AppRoutes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className = 'app'>
      <Router basename="/DermPal" >
      <Navbar />
      <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
