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
              {/* <td><img src={item.img_url} width="150px" height="200px"/></td> */}
              <td>{item.quantity}</td>  
              <td>{item.quantity_sold}</td>
              <td>{item.quantity_present}</td>                          
              <td>{item.status ? 'Active':'In-Active'}</td>         
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
                      {/* <th width="20%">IMG</th>  */}
                      <th width="20%">QUANTITY TOTAL</th>
                      <th width="10%">SOLD</th>
                      <th width="20%">QUANTITY PRESENT</th>                             
                      <th width="20%">IS_ACTIVE</th>                               
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