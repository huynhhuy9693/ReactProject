
import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react"
import { useParams,useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AsyncSelect from 'react-select/async';
import 'bootstrap/dist/css/bootstrap.min.css';

const api = 'http://localhost:8080';
const CategoryEdit=()=>{
    const info={name:'', status:''};
    const state={selectValue: ""};
    const [categories, setCategory] = useState(info);
    const navigate = useNavigate();
    const {id} = useParams();
    console.log("id : ",id)
    useEffect(()=>{
        if(id!='new'){
            fetch(api+`/admin_product/category/${id}`)
            .then(response=>response.json())
            .then(data=>setCategory(data));
            
        }
        
   },[id,setCategory]);
   
    const handleChange =(event)=>{
        const{name, value}= event.target
        setCategory({...categories,[name]: value})
        this.setState({selectValue:event.target.value})
        console.log(event.target.value)              
    }
    console.log(categories)
    const handleSubmit = async(event)=>{
        event.preventDefault();

        await fetch("http://localhost:8080/admin_product/category"+(categories.id?'/'+categories.id: ''),
        {
            
            cache:'no-cache',
            method:(categories.id)?'PUT':'POST',
            headers: {
                
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
                
              },         
              body:JSON.stringify(categories),
              
        });
        
        setCategory(info);   
            
        navigate('/categories');       
    }
    const title=<h2>{categories.id ? 'Edit' : 'Add'}</h2>;
    return(
        <div>
            <Container>
                {title}
            </Container>
            <Form onSubmit={handleSubmit}>  
                <FormGroup>
                <Label for="name">NAME</Label>
                    <Input type="text" name="name" id="name" value={categories.name || ""}
                   onChange={handleChange} autoComplete="name"/>
                </FormGroup>
                <FormGroup>
                <Label for="status">STATUS</Label>
                    <select value={categories.status} onChange={handleChange}>
                        <option value="1">ACTION</option>
                        <option value="0">NOT ACTION</option>
                    </select>
                </FormGroup>
                <Button color="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}
export default CategoryEdit;