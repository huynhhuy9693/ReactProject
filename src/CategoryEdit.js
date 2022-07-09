
import { useEffect, useState } from "react"
import { useParams,useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const api = 'http://localhost:8080';
const CategoryEdit=()=>{
    const info={name:'',status:''};
    const [categories, setCategory] = useState(info);
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(()=>{
        if(id!='new'){
            fetch(api+`/admin-product/category/${id}`)
            .then(response=>response.json())
            .then(data=>setCategory(data));
            
        }
        
   },[id,setCategory]);
   
    const handleChange =(event)=>{
        const{name,status, value}= event.target       
        setCategory({...categories,[name]: value})
        // setCategory({...categories,[status]:value})
        console.log(categories)
                     
    }
    // const statusChange=(event)=>
    // {
    //     console.log(event.target.value)
    //     const{_status, value}= event.target.value
    //     setCategory({...categories.status,[_status]:event.target.value})
    //     console.log(categories)
    // }
    
    const handleSubmit = async(event)=>{
        event.preventDefault();

        await fetch("http://localhost:8080/admin-product/category"+(categories.id?'/'+categories.id: ''),
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
                {/* <FormGroup>
                <Label for="status">STATUS</Label>
                    <select value={categories.status} onChange={handleChange} name="status" id="status">
                        <option value="true">ACTIVE</option>
                        <option value="false">IN-ACTIVE</option>
                    </select>
                </FormGroup> */}
                <Button color="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}
export default CategoryEdit;