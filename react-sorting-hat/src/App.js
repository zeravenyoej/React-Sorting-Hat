import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={(props)=><Greeting{...props}/>}/>
        <Route path='/form' render={(props)=><Form{...props}/>}/>
      </div>
    );
  };
};

export default App;
