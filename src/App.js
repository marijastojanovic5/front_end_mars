import React from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './components/About'


import './App.css';

function App() {
  return (
    <div className="App">
     
        <NavBar />
        <Route exact path="/about" component={About}/>
        
        
       
   
    </div>
  );
}

export default App;
