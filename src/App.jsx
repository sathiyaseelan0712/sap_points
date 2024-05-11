import { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Signin from './components/signin/Signin';
import Personalinfo from './components/student/Personalinfo';
import AddUsersFromCSV from './components/adduser/admin';
import { StudentProvider, StudentContext } from './context/StudentContext';
import Staff_1 from './components/staff/Staff_1';
import Staff_2 from './components/staff/Staff_2';
import Staff_3 from './components/staff/Staff_3';
function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/personalinfo' element={<Personalinfo />} />
          <Route path='/admin' element={<AddUsersFromCSV/>}/>
          <Route path='/Staff_1' element={<Staff_1/>}/>
          <Route path='/Staff_2' element={<Staff_2/>}/>
          <Route path='/Staff_3' element={<Staff_3/>}/>
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}


export default App;

