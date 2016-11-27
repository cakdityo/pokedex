var redux = require('redux');
var thunk = require('redux-thunk').default;

var {
    pokemonNextReducer,
    pokemonsReducer,
    pokemonDetailReducer,
    pokemonFilterReducer,
    pokemonTypesReducer
} = require('../reducers');

module.exports = function(initialState={}) {
    var reducer = redux.combineReducers({
        next: pokemonNextReducer,
        pokemons: pokemonsReducer,
        pokemonDetail: pokemonDetailReducer,
        pokemonFilter: pokemonFilterReducer,
        types: pokemonTypesReducer
    });

    var store = redux.createStore(
        reducer,
        initialState,
        // Add THUNK middleware for handling asynchronous actions
        redux.compose(
            redux.applyMiddleware(thunk)
        )
    );

    return store;
}