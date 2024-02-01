// Cards.js

import React, { Component } from 'react';

class Cards extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <div key={monster.id} className="card-container">
            <img
              src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              alt="monster"
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
