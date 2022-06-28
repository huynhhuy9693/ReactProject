
import { useEffect, useState } from "react"
import { useParams,useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

const api = 'http://localhost:8080';
const ProductEdit=()=>{
    const info={name:'', status:''};
    const [products, setProduct] = useState(info);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        if(id!='new'){
            fetch(api+'/admin_product/product/${id}')
            .then(response=>response.json())
            .then(data=>setProduct(data));
        }
        
    },[id,setProduct]);

    const handleChange =(event)=>{
        const{name, value}= event.target
        setProduct({...products,[name]: value})                    
    }
        
    const handleSubmit = async(event)=>{
        event.preventDefault();

        await fetch("http://localhost:8080/admin_product/product"+(products.id?'/'+products.id: ''),
        {
            mode:'no-cors',
            cache:'no-cache',
            method:(products.id)?'PUT':'POST',
            headers: {
                
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
                
              },         
              body:JSON.stringify(products),
              
        });
        
        setProduct(info);       
        navigate('/products');       
    }
    const title=<h2>{products.id ? 'Edit' : 'Add'}</h2>;
    return(
        <div>
            <Container>
                {title}
            </Container>
            <Form onSubmit={handleSubmit}>  
                <FormGroup>
                <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" value={products.name ||""}
                    onChange={handleChange} autoComplete="name"/>
                </FormGroup>
                <FormGroup>
                <Label for="price">PRICE</Label>
                    <Input type="text" name="price" id="price" value={products.price || ""}
                    onChange={handleChange} autoComplete="price"/>
                </FormGroup>
                <FormGroup>
                <Label for="img_url">IMAGE</Label>
                    <Input type="file" name="img_url" id="img_url" value={products.img_url ||""}
                    onChange={handleChange} autoComplete="img_url"/>
                </FormGroup>
                <FormGroup>
                <Label for="quantity">QUANTITY</Label>
                    <Input type="text" name="quantity" id="quantity" value={products.quantity||""}
                    onChange={handleChange} autoComplete="quantity"/>
                </FormGroup>
                <Button color="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}
export default ProductEdit;