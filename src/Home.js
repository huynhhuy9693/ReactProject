import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Button color="link"><Link to="/categories">Manage Category</Link></Button>
      </Container>
    </div>
  );
}

export default Home;