import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';

import Card from './components/card';
import Button from './components/button'
import Layout from './layouts/layout';

import Navbar from './components/navbar'



class App extends Component {

  constructor() {
    super();
    this.state = { person: [{}] };
}

componentDidMount() {
    // fetch('https://reqres.in/api/users?per_page=100')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(resData => {
            this.setState({ person: resData }); //this is an asynchronous function
        })
}
  render() {

    return (
        // <Layout/>
        <React.Fragment>
          <Navbar/>
        <Card cardWidth={{width: 100 + '%'}} cardData={this.state.person}/>
        </React.Fragment>
    );
  }
}

export default App;
