module.exports = {
    pokemonsReducer: pokemonsReducer
}

function pokemonsReducer(state={ count: 0, previous: '', results: [], next: ''}, action) {

    switch(action.type) {
        case 'SET_POKEMONS':
            return Object.assign({}, state, {
                previous: action.pokemons.previous,
                results: [
                    state.results,
                    ...action.pokemons.results
                ],
                next: action.pokemons.next
            });
        default:
            return state;
    }

}