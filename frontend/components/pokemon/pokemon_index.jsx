import React from 'react';
import { Route } from 'react-router-dom';
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pokemonItems = this.props.pokemon.map( poke =>
        <PokemonIndexItem key={poke.id} pokemon={poke} />
    )
;

    return (
      <section className="pokedex">
        <Route path="/" component={ PokemonFormContainer } />
        <ul>
          {pokemonItems}
        </ul>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </section>
  );}
}

export default PokemonIndex;
