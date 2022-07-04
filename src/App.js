
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
import UserEdit from './UserEdit';
import Reports from './Reports';
import ReportProduct from './ReportProduct';
import Sale from './Sale';

function App()
{
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/reports" element={<Reports/>}/>
        {/* list */}
        <Route path='/categories' exact={true} element={<CategoryList/>}/>     
        <Route path='/products' exact={true} element={<ProductList/>}/>
        <Route path='/roles' exact={true} element={<RoleList/>}/>
        <Route path='/users' exact={true} element={<UserList/>}/>s
        {/* create/edit */}
        <Route path='/categories/:id' element={<CategoryEdit/>}/>
        <Route path='/products/:id' element={<ProductEdit/>}/>
        <Route path='/roles/:id' element={<RoleEdit/>}/>
        <Route path='/users/:id' element={<UserEdit/>}/>
        {/* report */}
        <Route path='/report/products' exact={true} element={<ReportProduct/>}/>
        {/* sale */}
        <Route exact path="/sale" element={<Sale/>}/>
      </Routes>
    </Router>
  )
}
 

export default App;
