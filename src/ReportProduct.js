import React, { Component } from 'react';
import './App.css';
import { Container, Table,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class ReportProduct extends Component
{
  state = {
    isLoading : true,
    products : []

  };

  async componentDidMount()
  {
    const response = await fetch("http://localhost:8080/report/products");
    const body = await response.json();  
    this.setState({products:body, isLoading: false});

  }
 

  render()
  {
    const {products, isLoading}= this.state;

    
    

    if(isLoading)
    {
      return <p>Loading ...</p>
    }
    
    const productList = products.map(item=>{
          return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>             
              <td>{item.quantity}</td>
              <td>{item.quantityPresent}</td>  
              <td>{(item.quantity-item.quantityPresent)}</td>                        
              <td>{(item.quantityPresent) >0 ? 'stocking':'Out of stock'}</td>         
          </tr>
        })
        return (
          <Container fluid>
              <div className="float-end">                           
                <h2>Product_Report</h2>
                    <a href='http://localhost:8080/report/dowload' download="reports">download</a>
                <Table className='mt -4'>
                  <thead>
                      <tr>  
                      <th width="10%">ID</th>               
                      <th width="20%">NAME</th>
                      <th width="20%">PRICE</th>               
                      <th width="20%">QUANTITY TOTAL</th>
                      <th width="20%">QUANTITY PRESENT</th>
                      <th width="10%">SOLD</th>                            
                      <th width="20%">STATUS</th>                               
                      </tr>
                  </thead>
                  <tbody>
                      {productList}
                     
                  </tbody>
                </Table>          
              </div>      
          </Container>
        );
      };
}  
      export default ReportProduct;