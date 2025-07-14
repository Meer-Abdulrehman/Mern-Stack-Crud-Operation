import { useState } from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Components/Users';
import CreateData from './Components/CreateData'
import UpdateData from './Components/UpdateData';

function App() {
  
  return (
    <>
    
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="/createdata" element={<CreateData />} />
       <Route path="/update/:id" element={<UpdateData />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
