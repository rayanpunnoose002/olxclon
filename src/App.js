import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from'./Pages/Login'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
function App() {
  return (
    <div>
      <Router>
        
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route exact path='/'>
        <Home />
        </Route>
      </Router>

      
    </div>
  );
}

export default App;
