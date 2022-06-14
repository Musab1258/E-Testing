import React from 'react';
import ReactDOM from 'react-dom';
import Radium, { StyleRoot } from 'radium';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from './routes/login';
import UserHome from './components/UserHome';
import reportWebVitals from './reportWebVitals';

const style1 = {
  '@media (max-width: 700px)': {
        display: 'none',
    },
}

const style2 = {
  '.mobile__content': {
    display: 'block',
    margin: '5pc 2pc',
    color: 'blue',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <div style={style2} >
      <h1> 
        Only available on desktop
      </h1>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='Home' element={<Home />} /> 
        <Route path='login' element={<Login />} />
        <Route path='UserHome' element={<UserHome />} />  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
