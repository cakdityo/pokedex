var redux = require('redux');
var thunk = require('redux-thunk').default;

var {
    pokemonsReducer,
    pokemonDetailReducer,
    pokemonFilterReducer
} = require('../reducers');

module.exports = function(initialState={}) {
    var reducer = redux.combineReducers({
        pokemons: pokemonsReducer,
        pokemonDetail: pokemonDetailReducer,
        pokemonFilter: pokemonFilterReducer
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