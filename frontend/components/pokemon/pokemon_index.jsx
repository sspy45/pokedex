import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){

    return (
      <div>
        <ul>
          {this.props.pokemon.map((pokemon) => (
            <li key={pokemon.id}>
              <label>{pokemon.name}</label>
              <br />
              <img src={pokemon.image_url}/>
            </li>
          ))}
        </ul>
      </div>
  );}
}

export default PokemonIndex;
