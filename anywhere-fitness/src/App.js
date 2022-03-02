//Dependency Imports
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Component Imports
import NavBar from './components/navbar';
import Login from './components/login';
import SignUp from './components/signup';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path ='/login' element={<Login />} />
        <Route exact path ='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
