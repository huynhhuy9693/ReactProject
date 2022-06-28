
import './App.css';
import React from 'react';
import Home from './Home';
import CategoryList from './CategoryList';
import CategoryEdit from './CategoryEdit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App()
{
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/categories' exact={true} element={<CategoryList/>}/>
        <Route path='/categories/:id' element={<CategoryEdit/>}/>
        
      </Routes>
    </Router>
  )
}
 

export default App;
