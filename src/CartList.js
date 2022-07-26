import React, { Component } from 'react';
import './App.css';
import { Container, Table,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class CartList extends Component

{
  
  state = {
    isLoading : true,
    carts : [],
    sum:0

  };
  
  async componentDidMount()
  {
    const response = await fetch("http://localhost:8080/cart/cart/all");   
    const body = await response.json();   
    this.setState({carts:body, isLoading: false});
    const response1 = await fetch("http://localhost:8080/cart/sum-total-price");
    const body1 = await response1.json();
    console.log(body1)
    this.setState({sum:body1, isLoading1: false});
  }
 
  render()
  {
    const {carts,isLoading}= this.state;
    const {sum}= this.state;

    if(isLoading)
    {
      return <p>Loading ...</p>
    }
    const categoryList = carts.map(item=>{
          return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.dateOrder}</td>
              <td>{item.oderNumber}</td>
              <td>{item.status}</td>
              <td>{item.totalPrice}</td>
              <td>{item.userOrder}</td>
              <td>{item.voucher}</td>
              <td>{item.payment}</td>
              <td>{item.isSending?"Sent":"In-Sending"}</td>
              <td><Button color="success" href={"/carts/"+item.oderNumber}>details</Button></td>            
              
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
                      <th width="5%">ID</th> 
                      <th width="10%">ORDER-DATE</th>              
                      <th width="10%">ORDER NUMBER</th>        
                      <th width="10%">STATUS</th>      
                      <th width="15%">TOTAL-PRICE</th>
                      <th width="15%">USER-ORDER</th>
                      <th width="15%">VOUCHER</th>
                      <th width="10%">PAYMENT</th>
                      <th width="15%">IS-SENDING</th>
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

