var axios = require('axios');

module.exports = {
    getPokemons: getPokemons
};

function getPokemons(){
    return (dispatch, getState) => {

        var { pokemons } = getState();

        axios.get(`/api/pokemons?next=${ pokemons.next }`).then((newPokemons) => {

            dispatch(_setNextPokemons(newPokemons.data.next));

            newPokemons.data.results.forEach((newPokemon) => {
                axios.get(`/api/pokemon?path=${ newPokemon.url }`).then((pokemon) => {

                    dispatch(_setPokemon(pokemon.data));

                }, (err) => {
                    throw err;
                });
            });
        }, (err) => {
            throw err;
        });
    }
}

// Private actions only called here
// =========================================================================

function _setPokemon(pokemon) {
    return {
        type: 'SET_POKEMON',
        pokemon
    }
}

function _setNextPokemons(next) {
    return {
        type: 'SET_NEXT_POKEMONS',
        next
    }
}