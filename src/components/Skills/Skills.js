import React, { Component } from 'react';

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  };

  getCharacterData(battleTag, heroId) {
    let encodedBattleTag = encodeURI(battleTag);
    return fetch("https://us.api.battle.net/d3/profile/"+encodedBattleTag+"/hero/"+heroId+"?locale=en_US&apikey=4nguzhmcnb6x9uueqwhnfwkvuxsst5h3")
      .then((res) => res.json())
      .then((resJson) => {
        return this.setState({data: resJson})
      })
  };

  componentDidMount() {
    console.log("skills");
    this.getCharacterData(this.props.battleTag, this.props.heroId);
  };

  render() {
    return (
      <div>
        {this.props.battleTag}
        Struff
        {this.props.heroId}
      </div>
    );
  }
}