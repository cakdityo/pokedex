var axios = require('axios');

module.exports = {
    getPokemons: getPokemons
};

function getPokemons(){
    return (dispatch) => {
        axios.get('/api/pokemons').then((pokemons) => {
            console.log(pokemons.data);
            // dispatch(_setPokemons(pokemons.data));
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