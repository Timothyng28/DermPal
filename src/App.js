import React from 'react';
import Navbar from './components/Header/Navbar';
import './App.css';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <div className = 'app'>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
