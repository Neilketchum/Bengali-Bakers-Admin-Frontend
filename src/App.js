import React from 'react';

import './App.css';

import Home from "./containers/Home/index"
import Signin from "./containers/Signin/index"
import Signup from "./containers/Signup/index"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import PrivateRoute from './components/HOC/PrivateRoute';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path = '/' exact component = {Home}/>

          </Switch>
          <Switch>
            <Route path = '/signin' exact component = {Signin}/>
          </Switch>
          <Switch>
            <Route path = '/signup' exact component = {Signup}/>
          </Switch>

        </BrowserRouter>
         
      </div>
  );
}

export default App;
