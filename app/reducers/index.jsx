module.exports = {
    pokemonsReducer: pokemonsReducer,
    pokemonDetailReducer: pokemonDetailReducer
}

function pokemonsReducer(state={ pokemons: [], next: 'https://pokeapi.co/api/v2/pokemon'}, action) {

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

function setDefaultPokemonDetail(){
    return {
        name: '',
        sprites: {
            front_default: '',
            back_default: ''
        }
    }
}