//Dependency Imports
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Component Imports
import NavBar from './components/navbar';
import Login from './components/login';
import SignUp from './components/signup';
import Walkthrough from './components/walkthrough';
import ClassList from './components/classList';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path ='/login' element={<Login />} />
        <Route exact path ='/signup' element={<SignUp />} />
        <Route exact path ='/walkthrough' element={<Walkthrough />} />
        <Route exact path ='/classes' element={<ClassList />} />
      </Routes>
    </div>
  );
}

export default App;
