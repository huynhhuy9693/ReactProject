import React, { Component } from 'react';
import './App.css';
import { Container, Table,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class CategoryList extends Component
{
  state = {
    isLoading : true,
    categories : []
  };

  async componentDidMount()
  {
    const response = await fetch("http://localhost:8080/admin_product/categories");
    const body = await response.json();
    this.setState({categories:body, isLoading: false});
  }

  render()
  {
    const {categories, isLoading}= this.state;
    if(isLoading)
    {
      return <p>Loading ...</p>
    }
    const categoryList = categories.map(item=>{
          return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td> <Button size="sm" color="primary" href={"/categories/"+item.id}>Edit</Button></td>
          </tr>
        })
        return (
          <Container fluid>
              <div className="float-end">  
              <Button color="success" href="/categories/new">Add</Button>               
                <h2>Category_List</h2>
                <Table className='mt -4'>
                  <thead>
                      <tr>  
                      <th width="20%">ID</th>               
                      <th width="20%">NAME</th>              
                      <th width="10%">ACTION</th>
                      </tr>
                  </thead>
                  <tbody>
                      {categoryList}
                  </tbody>
                </Table>          
              </div>      
          </Container>
        );
  }
}           
     export default CategoryList;