import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { fetchAllPokemon } from './util/api_util';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root.jsx';

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store ={store} />, rootEl);

  window.store = store;

});
