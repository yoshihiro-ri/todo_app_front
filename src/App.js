import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { TaskCards } from './components/task/TaskCards';
import Home from './pages/Home.jsx';
import Form from './pages/Form.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />

      </Routes>
    </Router>
    // <div className='app'>
    //   <Header />
    //   <TaskCards />
    // </div>
  )
}

export default App;
