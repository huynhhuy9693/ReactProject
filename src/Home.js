import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Button color="link"><Link to="/categories">Manage Category</Link></Button>
        <Button color="link"><Link to="/products">Manage Product</Link></Button>
        <Button color="link"><Link to="/roles">Manage Role</Link></Button>
        <Button color="link"><Link to="/users">Manage User</Link></Button>
        <Button color="link"><Link to="/carts">Manage Cart</Link></Button>
        <Button color="link"><Link to="/reports">Report</Link></Button>
        <Button color="link"><Link to="/sale">User-Page</Link></Button>
        <Button color="link"><Link to="/register">Register</Link></Button>
      </Container>
    </div>
  );
}

export default Home;