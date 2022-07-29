import './App.css';
import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';
import SignUp from './pages/login/SingUp/SignUp';
import ForgetPassword from './pages/login/forgetPassword/forgetPassword';
import {routes} from './pages/public/routes';




import Login from './pages/login/login';


function App() {
  const reactRoutes= useRoutes(routes)
  return (<Fragment>
    {reactRoutes} 
  </Fragment>
  )
}

export default App;
