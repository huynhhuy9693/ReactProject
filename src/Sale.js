import React, { Component } from 'react';
import './App.css';
import { Container, Table,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class ProductList extends Component
{
  state = {
    isLoading : true,
    products : []

  };

  async componentDidMount()
  {
    const response = await fetch("http://localhost:8080/admin-product/product/all");
    const body = await response.json();
    this.setState({products:body, isLoading: false});
    console.log(body)
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
              <img src={item.img_url} width="100px" height="150px"></img>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><Button size="sm" color="primary" href="">CART</Button></td>
          </tr>
        })
        return (
          <Container fluid>
              <div>                 
                <h2>Product</h2>
                <Table className='mt -4'>
                  <thead>
                      <tr>  
                        
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
      export default ProductList;