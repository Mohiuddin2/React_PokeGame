//  All data will shown here in browser props data will co
// This is first file like introduction / root

import React, { Component } from "react";
import "./Pokecard.css";
// const PokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const PokeAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const padTothee = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;

class Pokecard extends Component {
  render() {
    let imgSrc = `${PokeAPI}${padTothee(this.props.id)}.png`;
    console.log(imgSrc);
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{this.props.name}</h1>
        <div className='Pokecard-image'>
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className='Pokecard-data'>Type: {this.props.type}</div>
        <div className='Pokecard-data'>Expe: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
