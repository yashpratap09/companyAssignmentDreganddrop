import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from "../src/pages/homePage"
import GetAllData from "../src/pages/getAllData"
import CreateData from "../src/pages/createData"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <Routes>

    <Route path='/' element={<HomePage/>}/>
    <Route path='/GetAllData' element={<GetAllData/>}/>
      <Route path='/CreateData' element={<CreateData/>}/>



  </Routes>
  
  
  
  </BrowserRouter>
);

