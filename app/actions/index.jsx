var axios = require('axios');

module.exports = {
    getPokemons: getPokemons,
    getPokemonDetail: getPokemonDetail
};

const rootUrl = 'https://powerful-falls-18959.herokuapp.com/api';

function getPokemons(){
    return (dispatch, getState) => {

        var { pokemons } = getState();
        var next = pokemons.next || rootUrl;
        // Looking for offset 
        var offset = next.match(/\?offset=[0-9]+/) || '';

        axios.get(`${ rootUrl }/pokemon${ offset }`).then((newPokemons) => {

            dispatch(_setNextPokemons(newPokemons.data.next));

            newPokemons.data.results.forEach((newPokemon) => {
                axios.get(`${ rootUrl }/pokemon/${ newPokemon.name }`).then((pokemon) => {

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

function getPokemonDetail(name) {
    return (dispatch) => {
        axios.get(`${ rootUrl }/pokemon/${ name }`).then((pokemon) => {
            dispatch(_setPokemonDetail(pokemon.data));
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

function _setPokemonDetail(pokemon) {
    return {
        type: 'SET_POKEMON_DETAIL',
        pokemon
    }
}