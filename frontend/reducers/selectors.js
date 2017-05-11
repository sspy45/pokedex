import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  // debugger;
  return values(state.pokemon);
};
