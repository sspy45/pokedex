import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  // debugger;
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  // TODO: CHECK THIS AGAIN LATER!!!
  if (state.pokemonDetail.items) {
    return state.pokemonDetail.items.find((item) => {
      return item.id === parseInt(itemId);
    });
  }
};
