import React, { Component } from 'react';
import './App.css';
import { Container, Table,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




class UserList extends Component
{
  state = {
    isLoading : true,
    users : []
  };

  async componentDidMount()
  {
    const response = await fetch("http://localhost:8080/admin-user/user/all");
    const body = await response.json();
    console.log(body)
    this.setState({users:body, isLoading: false});
  }

  render()
  {
    const {users, isLoading}= this.state;
    if(isLoading)
    {
      return <p>Loading ...</p>
    }
     const userList = users.map(item=>{
    return <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.userName}</td>
        <td>{item.passWord}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.dob}</td>
        <td>{item.status ? 'Active':'In-Active'}</td> 
        <td>{item.roleId?.name}</td>
        <td> <Button size="sm" color="primary" href={"/users/"+item.id}>Edit</Button></td>
    </tr>
  })
  return (
    <Container fluid>
        <div className="float-end">  
        <Button color="success" href="/users/new">Add</Button>               
          <h2>User_List</h2>
          <Table className='mt -4'>
            <thead>
                <tr>  
                <th width="5%">ID</th>               
                <th width="10%">NAME</th>
                <th width="10%">USER_NAME</th>               
                <th width="10%">PASS_WORD</th> 
                <th width="20%">EMAIL</th>               
                <th width="15%">PHONE</th>             
                <th width="10%">DATE_OF_BIRTH</th>
                <th width="10%">IS_ACTIVE</th>
                <td width="10%">ROLE</td>
                <th width="10%">ACTION</th>

                </tr>
            </thead>
            <tbody>
                {userList}
            </tbody>
          </Table>          
        </div>      
    </Container>
  );
};
}

export default UserList;