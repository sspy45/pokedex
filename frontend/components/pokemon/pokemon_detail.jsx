import React from 'react';
import { Route } from 'react-router-dom';
import ItemDetailContainer from "./item_detail_container";

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.pokemonId !== newProps.match.params.pokemonId){
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    const { pokemon } = this.props;
    const info = Object.keys(pokemon).length < 1 ? "" : (
      <div>
        <ul>
          <li>{pokemon.name}</li>
          <li>{pokemon.attack}</li>
          <li>{pokemon.defense}</li>
          <li>{pokemon.poke_type}</li>
          <li>{pokemon.moves}</li>
        </ul>


      </div>
    );

    return (
      <section className="pokedex">
        <ul>
          {info}
        </ul>
        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
        <h1>Hey</h1>
      </section>
  );}
}

export default PokemonDetail;
