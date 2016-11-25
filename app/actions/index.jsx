var axios = require('axios');

module.exports = {
    getPokemons: getPokemons
};

const rootUrl = '/api/pokemons';

function getPokemons(){
    return (dispatch, getState) => {

        var { pokemons } = getState();

        axios.get(`${ rootUrl }?next=${ pokemons.next }`).then((pokemons) => {
            dispatch(_setPokemons(pokemons.data));
        }, (err) => {
            throw err;
        });
    }
}


// Private actions only called here
// =========================================================================

function _setPokemons(pokemons) {
    return {
        type: 'SET_POKEMONS',
        pokemons
    }
}