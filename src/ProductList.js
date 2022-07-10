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
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              {/* <td><img src={item.img_url} width="150px" height="200px"/></td> */}
              <td>{item.quantity}</td>
              <td>{item.quantityPresent}</td>            
              <td>{(item.quantityPresent) >0 ? 'Active':'In-Active'}</td> 
              {/* <td>{item.categoryId?.name}</td> */}
              <td> <Button size="sm" color="primary" href={"/products/"+item.id}>Edit</Button></td>
          </tr>
        })
        return (
          <Container fluid>
              <div className="float-end">  
              <Button color="success" href="/products/new">Add</Button>               
                <h2>Product_List</h2>
                <Table className='mt -4'>
                  <thead>
                      <tr>  
                      <th width="5%">ID</th>               
                      <th width="20%">NAME</th>
                      <th width="20%">PRICE</th>               
                      {/* <th width="20%">IMG</th>  */}
                      <th width="20%">QUANTITY</th>   
                      <th width="20%">QUANTITY_PRESENT</th>             
                      <th width="20%">STATUS</th>    
                      {/* <th width="20%">CATEGORY</th>        */}
                      <th width="10%">ACTION</th>
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