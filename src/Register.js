
import { useEffect, useState } from "react"
import { useParams,useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const api = 'http://localhost:8080';
const Register=()=>{
    const info={name:'', status:''};
    const [users, setUser] = useState(info);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        if(id!='new'){
            fetch(api+`/admin-user/user/${id}`)
            .then(response=>response.json())
            .then(data=>setUser(data));
        }
        
    },[id,setUser]);

    const handleChange =(event)=>{
        const{name, value}= event.target
        setUser({...users,[name]: value})                    
    }
        
    const handleSubmit = async(event)=>{
        event.preventDefault();

        await fetch("http://localhost:8080/mail/send"+(users.id?'/'+users.id: ''),
        {        
            cache:'no-cache',
            method:(users.id)?'PUT':'POST',
            headers: {                
                'Accept': 'application/json',
                'Content-Type': 'application/json',                               
              },         
              body:JSON.stringify(users),              
        });       
        setUser(info);       
        navigate('/sale');       
    }
    const title=<h2>{users.id ? 'UPDATE' : 'REGISTER'}</h2>;
    return(
        <div>
            <Container>
                {title}
            </Container>
            <Form onSubmit={handleSubmit}>  
                <FormGroup>
                <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" value={users.name ||""}
                    onChange={handleChange} autoComplete="name"/>
                </FormGroup>
                <FormGroup>
                <Label for="userName">USER_NAME</Label>
                    <Input type="text" name="userName" id="userName" value={users.userName || ""}
                    onChange={handleChange} autoComplete="userName"/>
                </FormGroup>
                <FormGroup>
                <Label for="passWord">PASS_WORD</Label>
                    <Input type="password" name="passWord" id="passWord" value={users.passWord ||""}
                    onChange={handleChange} autoComplete="passWord"/>
                </FormGroup>
                <FormGroup>
                <Label for="email">EMAIL</Label>
                    <Input type="text" name="email" id="email" value={users.email||""}
                    onChange={handleChange} autoComplete="email"/>
                </FormGroup>
                <FormGroup>
                <Label for="phone">PHONE</Label>
                    <Input type="text" name="phone" id="phone" value={users.phone||""}
                    onChange={handleChange} autoComplete="phone"/>
                </FormGroup>
                <FormGroup>
                 <Label for="dob">DATE_OF_BIRTH</Label>
                     <Input type="date" name="dob" id="dob" value={users.dob||""}
                     onChange={handleChange} autoComplete="quantity"/>
                 </FormGroup>             
                <Button color="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}
export default Register;