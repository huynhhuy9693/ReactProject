import React, { Component} from 'react';
import './App.css';
import { Container, Table,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class RoleList extends Component
{
  state = {
    isLoading : true,
    roles : []
  };

  async componentDidMount()
  {
    const response = await fetch("http://localhost:8080/admin-user/role/all");
    const body = await response.json();
    this.setState({roles:body, isLoading: false});
  }
  render()
  {
    const {roles, isLoading}= this.state;
    if(isLoading)
    {
      return <p>Loading ...</p>
    }
    const roleList = roles.map(item=>{
          return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.status ? 'Active':'In-Active'}</td>            
              <td> <Button size="sm" color="primary" href={"/roles/"+item.id}>Edit</Button></td>
          </tr>
        })
        return (
          <Container fluid>
              <div className="float-end">  
              <Button color="success" href="/roles/new">Add</Button>               
                <h2>Role_List</h2>
                <Table className='mt -4'>
                  <thead>
                      <tr>  
                      <th width="20%">ID</th>               
                      <th width="20%">NAME</th>              
                      <th width="10%">ACTION</th>
                      </tr>
                  </thead>
                  <tbody>
                      {roleList}
                  </tbody>
                </Table>          
              </div>      
          </Container>
        );
  }
}           
     export default RoleList;