import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import RetrievePassword from './components/RetrievePassword';
import Instruction from './components/Instruction';
import Question from './components/Question.tsx';
import AnotherQuestion from './components/AnotherQuestion';
import SubmissionStatus from './components/SubmissionStatus';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/RetrievePassword' element={<RetrievePassword />} /> 
        <Route path='/Instruction' element={<Instruction />} />
        <Route path='/Question' element={<Question />} />
        <Route path='/AnotherQuestion' element={<AnotherQuestion />} />
        <Route path='/SubmissionStatus' element={<SubmissionStatus />} />  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
