import React from 'react';
import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        attack: 0,
        defense: 0,
        poke_type: 'bug',
        moves: [],
        image_url: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createPokemon(this.state).then((newPokemon) => {
      this.props.history.push(`pokemon/${newPokemon.id}`);
    });
  }

  render(){
    const pokeTypes = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ].sort();
    return (
      <div>
        <label>Name: </label>
        <input
          type="text"
          onChange={this.update("name")}>
        </input>
        <br />

        <label>Attack: </label>
        <input
          type="text"
          onChange={this.update("attack")}>
        </input>
        <br />

        <label>Defense: </label>
        <input
          type="text"
          onChange={this.update("defense")}>
        </input>

        <label>Poke type: </label>
        <select>
          {pokeTypes.map(type => {
            return (
              <option value={`${type}`}>{type}</option>
            );
          })}
        </select>

        <label>Moves: </label>
        <input
          type="text"
          onChange={this.update("moves")}>
        </input>

        <label>Image Url: </label>
        <input
          type="text"
          onChange={this.update("image_url")}>
        </input>

        <br />

        <input
          type="submit"
          onClick={this.handleSubmit}>
        </input>

      </div>
    );
  }
}

export default withRouter(PokemonForm);
