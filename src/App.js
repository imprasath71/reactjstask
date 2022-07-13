import logo from './logo.svg';
import React, {useState} from "react";
import Axios from "axios";
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Reg from './registration';  
import Login from './login';
import Certificate from "./certificate";
import Dashboard from "./dashboard";
import Logout from "./logout"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Reg />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/certificate" element={<Certificate />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/logout" element={<Logout />}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
