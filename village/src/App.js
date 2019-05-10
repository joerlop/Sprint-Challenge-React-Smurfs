import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import axios from "axios";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      this.setState({
        smurfs: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav className="navigation">
          <NavLink
            className="navlink" 
            to={`/`}
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            Home
          </NavLink>
          <NavLink
            className="navlink" 
            to={`/smurf-form`}
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            Form
          </NavLink>
        </nav>
        <Route 
          exact 
          path="/" 
          render={(routeProps) => (
            <Smurfs {...routeProps} smurfs={this.state.smurfs} />
          )}
        />
        <Route 
          exact 
          path="/smurf-form" 
          render={(routeProps) => (
            <SmurfForm {...routeProps} />
          )}
        />
      </div>
    );
  }
}

export default App;
