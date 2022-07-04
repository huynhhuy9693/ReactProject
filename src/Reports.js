import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const Reports = () => {
    return (
      <div>
        <Container fluid>
          <Button color="link"><Link to="/report/products">Report Products</Link></Button>        
        </Container>
      </div>
    );
  }
  
export default Reports;