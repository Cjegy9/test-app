import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/less/bootstrap.less';
import './App.css';
import Navigation from './Nav.js';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
    };

    getProfileData() {
        return fetch("https://us.api.battle.net/d3/profile/Mildlysaucy%231844/?locale=en_US&apikey=4nguzhmcnb6x9uueqwhnfwkvuxsst5h3")
            .then((response) => response.json())
            .then((responseJson) => {
                return this.setState({data: responseJson})
            })
    };


    componentDidMount() {
        this.getProfileData();
    };

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>{this.state.data.battleTag}</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
