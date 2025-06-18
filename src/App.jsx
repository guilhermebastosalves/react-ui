import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './components/EmpListing';
import EmpCreate from './components/EmpCreate';
import EmpEdit from './components/EmpEdit';
import EmpDetails from './components/EmpDetails';
import Header from './components/Header';

function App() {

  return (
    <>
      <div className='App'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<EmpListing />}></Route>
            <Route path='/employee/create' element={<EmpCreate />}></Route>
            <Route path='/employee/edit/:id' element={<EmpEdit />}></Route>
            <Route path='/employee/detail/:id' element={<EmpDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </div >
    </>
  );

}

export default App
