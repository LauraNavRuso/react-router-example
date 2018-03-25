import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Pricing from './Pricing.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <nav>
           <ul>
             <li><Link to='/'>Home</Link></li>
             <li><Link to='/about'>About</Link></li>
             <li><Link to='/pricing'>Pricing</Link></li>
           </ul>
          </nav>
        </header>


        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/pricing' component={ Pricing } />
        </Switch>

      </div>
    );
  }
}

export default App;
