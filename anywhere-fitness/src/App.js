//Dependency Imports
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/utils/privateRoute';

// Component Imports
import NavBar from './components/navbar';
import Login from './components/login';
import SignUp from './components/signup';
import Walkthrough from './components/walkthrough';
import ClassList from './components/classList';
import Logout from './components/login/logout';
import AddClass from './components/classList/addClass';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path ='/' element={<Login />} />
        <Route exact path ='/login' element={<Login />} />
        <Route exact path ='/signup' element={<SignUp />} />
        <Route exact path='/walkthrough' element={<PrivateRoute />}>
          <Route exact path='/walkthrough' element={<Walkthrough />}/>
        </Route>
        {/* <Route exact path='/classes' element={<PrivateRoute />}> */}
          <Route exact path='/classes' element={<ClassList />}/>
        {/* </Route> */}
        <Route exact path='/logout' element={<PrivateRoute />}>
          <Route exact path='/logout' element={<Logout />}/>
        </Route>
        {/* <Route exact path='/addclass' element={<PrivateRoute />}> */}
          <Route exact path='/addclass' element={<AddClass />}/>
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
