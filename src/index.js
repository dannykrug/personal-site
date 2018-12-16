import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, NavLink, withRouter} from 'react-router-dom'
import NavBar from '../src/components/NavBar'

function renderSite  () {
  return(
    <div>
    <Router>
    <div>
    <Route exact path='/' component={App}/>
    </div>
    </Router>
    </div>
  )
}

ReactDOM.render(renderSite(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
