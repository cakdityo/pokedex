var axios = require('axios');

module.exports = {
    getPokemons: getPokemons,
    getPokemonDetail: getPokemonDetail,
    getPokemonTypes: getPokemonTypes,
    getPokemonTypeDetail: getPokemonTypeDetail,
    setFilterPokemonName: setFilterPokemonName,
    setFilterPokemonType: setFilterPokemonType
};

const rootUrl = 'https://afternoon-thicket-83998.herokuapp.com/api';

function getPokemons(){
    return (dispatch, getState) => {

        var { next, pokemons } = getState();

        // Looking for offset 
        var offset = next.match(/[0-9]+/g);
        // Reg Exp above always return ['2', OFFSET_NUMBER]
        // So I have to get the array index 1 element
        // I don't know better RegExp to implement this
        if (offset !== null) {
            offset = offset[1];
        }

        axios.get(`${ rootUrl }/pokemon?offset=${ offset }`).then((newPokemons) => {

            
            dispatch(_setNextPokemons(newPokemons.data.next));

            newPokemons.data.results.forEach((newPokemon) => {
                // Only fetch if pokemon has not been fectched yet
                if (!pokemons.find((fetchedPokemon) => (fetchedPokemon.name === newPokemon.name))) {
                    axios.get(`${ rootUrl }/pokemon/${ newPokemon.name }`).then((pokemon) => {
                        dispatch(_setPokemon(pokemon.data));
                    });
                }
            });
        });
    }
}

function getPokemonDetail(name) {
    return (dispatch, getState) => {
        var pokemons = getState().pokemons;
        var fetchedPokemon = pokemons.find((fetchedPokemon) => (fetchedPokemon.name === name));

        if (fetchedPokemon) {
            dispatch(_setPokemonDetail(fetchedPokemon));
        } else {
            axios.get(`${ rootUrl }/pokemon/${ name }`).then((pokemon) => {
                dispatch(_setPokemonDetail(pokemon.data));
            });
        }
    }
}

function getPokemonTypes(){
    return (dispatch) => {
        axios.get(`${ rootUrl }/type`).then((types) =>{
            dispatch(_setPokemonTypes(types.data.results));
        });
    }
}

function getPokemonTypeDetail(typeName) {
    return (dispatch, getState) => {

        // Fetch specified type with its all pokemons
        axios.get(`${ rootUrl }/type/${ typeName }`).then((type) => {

            var { pokemons } = getState();

            // Iterate over all pokemons in associated type
            type.data.pokemon.forEach((pokemon) => {
                
                // Only fetch if pokemon has not been fectched yet
                if(!pokemons.find((fetchedPokemon) => (fetchedPokemon.name === pokemon.pokemon.name))) {
                    axios.get(`${ rootUrl }/pokemon/${ pokemon.pokemon.name }`).then((pokemon) => {
                        dispatch(_setPokemon(pokemon.data));
                    });
                }
            });
        });
    }
}

function setFilterPokemonName(name){
    return {
        type: 'SET_FILTER_POKEMON_NAME',
        name
    }
}

function setFilterPokemonType(_type) {
    return {
        type: 'SET_FILTER_POKEMON_TYPE',
        _type
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

function _setPokemonTypes(types) {
    return {
        type: 'SET_TYPES',
        types
    }
}