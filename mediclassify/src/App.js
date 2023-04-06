import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Features from './pages/Features';
import { Login } from './pages/Login';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/features" element={<Features/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/*" element={<NoPage/>} />
        </Routes>
    </Router>
  );
}

export default App;