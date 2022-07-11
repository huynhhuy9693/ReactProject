import React, { Component } from 'react';
import './App.css';
import { Container, Table,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class CartList extends Component

{
  
  state = {
    isLoading : true,
    categories : [],
    sum:0

  };
  
  async componentDidMount()
  {
    const response = await fetch("http://localhost:8080/cart/cart/all");   
    const body = await response.json();   
    this.setState({categories:body, isLoading: false});
    const response1 = await fetch("http://localhost:8080/cart/sum-total-price");
    const body1 = await response1.json();
    console.log(body1)
    this.setState({sum:body1, isLoading1: false});
  }
 
  render()
  {
    const {categories,isLoading}= this.state;
    const {sum}= this.state;

    if(isLoading)
    {
      return <p>Loading ...</p>
    }
    const categoryList = categories.map(item=>{
          return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.oderNumber}</td>
              <td>{item.status}</td>
              <td>{item.totalPrice}</td>
              <td><Button color="success" href="">details</Button></td>            
              
          </tr>
        })
        return (
          <Container fluid>
              <div>  
              <Button color="success" href="/categories/new">Add</Button>               
                <h2>CART-LIST</h2>
                <Table className='mt -4'>
                  <thead>
                      <tr>  
                      <th width="20%">ID</th>               
                      <th width="20%">ORDER NUMBER</th>        
                      <th width="20%">STATUS</th>      
                      <th width="10%">TOTAL-PRICE</th>
                      <th width="10%">ACTION</th>                      
                      </tr>
                  </thead>
                  <tbody>
                      {categoryList}
                  </tbody>
                </Table>       
                <div>
                 Sum Total Price : {sum}
                </div>   
              </div>      
          </Container>
        );
  }
}           
     export default CartList;

