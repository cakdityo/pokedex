module.exports = {
    pokemonNextReducer: pokemonNextReducer,
    pokemonsReducer: pokemonsReducer,
    pokemonDetailReducer: pokemonDetailReducer,
    pokemonFilterReducer: pokemonFilterReducer,
    pokemonTypesReducer: pokemonTypesReducer
}

function pokemonNextReducer(state='', action) {
    
    switch(action.type) {
        case 'SET_NEXT_POKEMONS':
            return action.next;
        default:
            return state;
    }
}

function pokemonsReducer(state=[], action) {

    switch(action.type) {
        case 'SET_POKEMON':
            return [
                ...state,
                action.pokemon
            ];
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
        case 'SET_FILTER_POKEMON_TYPE':
            return Object.assign({}, state, { type: action._type });
        default:
            return state;
    }
    
}

function pokemonTypesReducer(state=[], action) {

    switch(action.type) {
        case 'SET_TYPES':
            return [ ...action.types ];
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