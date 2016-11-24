module.exports = {
    pokemonsReducer: pokemonsReducer
}

function pokemonsReducer(state=[], action) {

    switch(action.type) {
        case 'GET_POKEMONS':
            return [
                ...action.pokemons
            ];
        default:
            return state;
    }

}