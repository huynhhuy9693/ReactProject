
import './App.css';
import React from 'react';
import Home from './Home';
import CategoryList from './CategoryList';
import CategoryEdit from './CategoryEdit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductList from './ProductList';
import RoleList from './RoleList';
import UserList from './UserList';
import ProductEdit from './ProductEdit';
import RoleEdit from './RoleEdit';

function App()
{
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* list */}
        <Route path='/categories' exact={true} element={<CategoryList/>}/>     
        <Route path='/products' exact={true} element={<ProductList/>}/>
        <Route path='/roles' exact={true} element={<RoleList/>}/>
        <Route path='/users' exact={true} element={<UserList/>}/>
        {/* create/edit */}
        <Route path='/categories/:id' element={<CategoryEdit/>}/>
        <Route path='/products/:id' element={<ProductEdit/>}/>
        <Route path='/roles/:id' element={<RoleEdit/>}/>
        {/* // <Route path='/users/:id' element={<UserEdit/>}/> */}
      </Routes>
    </Router>
  )
}
 

export default App;
