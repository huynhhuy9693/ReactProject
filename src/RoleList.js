import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Table,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const RoleList = () => {

  const [roles, setRole] = useState([]);
  const [loading, setLoading] = useState(false);
  const api ='http://localhost:8080'

  useEffect(() => {
    setLoading(true);

    fetch(api+'/admin_user/roles')
      .then(response => response.json())
      .then(data => {
        setRole(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  const roleList = roles.map(item=>{
    return <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
    </tr>
  })
  return (
    <Container fluid>
        <div className="float-end">  
        <Button color="success" href="/roles/new">Add</Button>               
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
                {roleList}
            </tbody>
          </Table>          
        </div>      
    </Container>
  );
};

export default RoleList;