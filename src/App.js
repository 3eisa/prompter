import React,{useEffect, useMemo, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import {UserContext} from './UserContext';

import './App.css';

import LoginForm from './LoginForm';
import Writer from './Writer';
import ProtectedRoutes from './ProtectedRoutes';



function App() {

  const [user,setUser] = useState(null);
  //memo for better performance
  const userMemo = useMemo(()=>({user,setUser}),[user,setUser])

  //debuggin
  useEffect(()=>{
    console.log(user)
  },[user])



  return (
    <div className="App">
      <UserContext.Provider value={userMemo}>
        <Routes>
          <Route path='/login' element={<LoginForm />}></Route>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/' element={<Writer />}></Route>
          </Route>
        </Routes>
      </UserContext.Provider>

    </div>
  );
}

export default App;
