import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Table,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const UserList = () => {

  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const api ='http://localhost:8080'

  useEffect(() => {
    setLoading(true);

    fetch(api+'/admin_user/users')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
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
        <td>{item.status ? 'Action':'Not Action'}</td>
        {/* <td >{item.category.name}</td> */}
    </tr>
  })
  return (
    <Container fluid>
        <div className="float-end">  
        <Button color="success" href="/product/new">Add</Button>               
          <h2>Category_List</h2>
          <Table className='mt -4'>
            <thead>
                <tr>  
                <th width="20%">ID</th>               
                <th width="20%">NAME</th>
                <th width="20%">USER_NAME</th>               
                <th width="20%">PASS_WORD</th> 
                <th width="20%">EMAIL</th>               
                <th width="20%">PHONE</th>             
                <th width="20%">DATE_OF_BIRTH</th>
                <th width="20%">STATUS</th>
                <th>ACTION</th>

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

export default UserList;