import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import Navbar from '../src/components/navbar';
// import Button from '../components/button';
import Input from '../src/components/input';
// import Table from '../components/table';
import Employee from './components/employeeManagement'



const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/navbar" component={Navbar} />
        <Route path="/input" component={Input} />
        <Route path="/employees" component={App} />
        <Route path="/employee/:id" component={Employee} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
