import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../stylesheets/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to MediClassify</h1>
      <p>A platform for managing medical images</p>
      <Link to="/login"><Button variant="primary">Get Started</Button></Link>
    </div>
  );
};

export default Home;