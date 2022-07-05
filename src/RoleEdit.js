
import { useEffect, useState } from "react"
import { useParams,useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const api = 'http://localhost:8080';
const RoleEdit=()=>{
    const info={name:'', isActive:''};
    const [roles, setRole] = useState(info);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        if(id!='new'){
            fetch(api+`/admin-user/role/${id}`)
            .then(response=>response.json())
            .then(data=>setRole(data));
        }
        
    },[id,setRole]);

    const handleChange =(event)=>{
        const{name, value}= event.target
        setRole({...roles,[name]: value})                    
    }
        
    const handleSubmit = async(event)=>{
        event.preventDefault();

        await fetch("http://localhost:8080/admin-user/role"+(roles.id?'/'+roles.id: ''),
        {
            
            cache:'no-cache',
            method:(roles.id)?'PUT':'POST',
            headers: {
                
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
                
              },         
              body:JSON.stringify(roles),
              
        });
        
        setRole(info);       
        navigate('/roles');       
    }
    const title=<h2>{roles.id ? 'Edit' : 'Add'}</h2>;
    return(
        <div>
            <Container>
                {title}
            </Container>
            <Form onSubmit={handleSubmit}>  
                <FormGroup>
                <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={roles.name || ""}
                   onChange={handleChange} autoComplete="name"/>
                </FormGroup>
                <FormGroup>
                <Label for="status">STATUS</Label>
                    <select value={roles.status} onChange={handleChange} name="status" id="status">
                    <option value="true">ACTIVE</option>
                        <option value="false">IN-ACTIVE</option>
                    </select>
                </FormGroup>
                <Button color="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}
export default RoleEdit;