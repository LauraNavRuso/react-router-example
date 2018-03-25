import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Pricing from './Pricing.js';

import './App.css';


function renderLinkAndHightlightActive(route, text) {
  return (
    <Route path={ route }
          children={
            ({ match, history, location }) => {
              const activeClass = (!!match && match.isExact)
                ? 'nav-link--active'
                : 'nav-link--normal';

              return (
                <Link
                  to={ route }
                  className={ activeClass }
                >{ text }</Link>
              );
            }
          }
    />
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
           <ul>
             <li>{ renderLinkAndHightlightActive('/', 'Home') }</li>
             <li>{ renderLinkAndHightlightActive('/about', 'About') }</li>
             <li>{ renderLinkAndHightlightActive('/pricing', 'Pricing') }</li>
           </ul>
          </nav>
        </header>


        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' render={ () =>
                  <About objective="win" /> } />
          <Route path='/pricing' component={ Pricing } />
        </Switch>

      </div>
    );
  }
}

export default App;
