import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/form" element={<Form />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </Router>

  )
}

export default App;
