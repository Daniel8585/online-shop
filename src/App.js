import React from 'react';
import Menu from './container/Menu/Menu';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import HomePage from './container/HomePage/HomePage';

function App() {
  return (
   <Router>  
    <Switch>
       <Route exact path='/' component={HomePage}/>

    </Switch> 
  </Router>



  );
}

export default App;
