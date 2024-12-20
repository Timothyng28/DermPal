import React from 'react';
import Navbar from './components/Header/Navbar';
import Background from './components/Body/Background';
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
