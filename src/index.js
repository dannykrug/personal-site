import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, NavLink, withRouter} from 'react-router-dom'
import NavBar from '../src/components/NavBar'
import About from '../src/components/About'
import Blogs from '../src/components/Blogs'
import Projects from '../src/components/Projects'
import Contact from '../src/components/Contact'

function renderSite  () {
  return(
    <div>
    <Router>
    <div>
    <NavBar/>
    <Route exact path='/' component={App}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/projects' component={Projects}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/blogs' component={Blogs}/>
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
