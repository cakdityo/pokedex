module.exports = {
    pokemonsReducer: pokemonsReducer,
    pokemonDetailReducer: pokemonDetailReducer,
    pokemonFilterReducer: pokemonFilterReducer
}

function pokemonsReducer(state={ pokemons: [], next: ''}, action) {

    switch(action.type) {
        case 'SET_POKEMON':
            return Object.assign({}, state, {
                pokemons: [
                    ...state.pokemons,
                    action.pokemon
                ],
            });
        case 'SET_NEXT_POKEMONS':
            return Object.assign({}, state, {
                next: action.next
            });
        default:
            return state;
    }

}

function pokemonDetailReducer(state=setDefaultPokemonDetail(), action) {
    
    switch(action.type) {
        case 'SET_POKEMON_DETAIL':
            return Object.assign({}, action.pokemon);
        default:
            return state;
    }

}

function pokemonFilterReducer(state={ name: '', type: '' }, action) {
    switch(action.type) {
        case 'SET_FILTER_POKEMON_NAME':
            return Object.assign({}, state, { name: action.name });
        default:
            return state;
    }
}

function setDefaultPokemonDetail(){
    return {
        name: '',
        sprites: {
            front_default: '',
            back_default: ''
        }
    }
}