import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => {
  return (
    <li>
      <Link to={ `/pokemon/${props.pokemon.id}` }></Link>
      {props.pokemon.name}
      <img src={ props.pokemon.image_url }></img>
    </li>
  );
};
