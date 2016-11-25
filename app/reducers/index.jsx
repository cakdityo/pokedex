module.exports = {
    pokemonsReducer: pokemonsReducer
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