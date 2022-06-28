import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Table,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductList = () => {

  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const api ='http://localhost:8080'

  useEffect(() => {
    setLoading(true);

    fetch(api+'/admin_product/products')
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  const productList = products.map(item=>{
    return <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.img_url}</td>
        <td>{item.quantity}</td>
        <td>{item.status ? 'Action':'Not Action'}</td>
        {/* <td >{item.category.name}</td> */}
    </tr>
  })
  return (
    <Container fluid>
        <div className="float-end">  
        <Button color="success" href="/products/new">Add</Button>               
          <h2>Category_List</h2>
          <Table className='mt -4'>
            <thead>
                <tr>  
                <th width="20%">ID</th>               
                <th width="20%">NAME</th>
                <th width="20%">PRICE</th>               
                <th width="20%">IMG</th> 
                <th width="20%">QUANTITY</th>               
                <th width="20%">STATUS</th>             
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

export default ProductList;