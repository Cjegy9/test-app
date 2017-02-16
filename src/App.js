import React, { Component } from 'react';
import 'bootstrap/less/bootstrap.less';
import './App.css';
import Skills from './components/Skills/Skills';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            heroId: "84421657",
            battleTag: ""
        }
    };

    getProfileData() {
        return fetch("https://us.api.battle.net/d3/profile/Mildlysaucy%231844/?locale=en_US&apikey=4nguzhmcnb6x9uueqwhnfwkvuxsst5h3")
            .then((res) => res.json())
            .then((resJson) => {
                return this.setState({data: resJson, battleTag: resJson.battleTag})
            })
    };

    componentDidMount() {
        console.log("app");
        this.getProfileData();
    };

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <Skills
          battleTag={this.state.data.battleTag}
          heroId={this.state.heroId}
        />
        <p className="App-intro">
          To get started, edit <code>{this.state.data.name}</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
