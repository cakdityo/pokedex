var React = require('react');
var { connect } = require('react-redux');

var { getPokemons } = require('../actions');
var Pokemon = require('./Pokemon');

class PokemonList extends React.Component {

    componentDidMount() {
        var { dispatch } = this.props;

        dispatch(getPokemons());
    }

    render() {
        var { pokemons } = this.props;
        // var fake = [
        //     {
        //         name: 'Pikachu',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
        //         }
        //     },
        //     {
        //         name: 'Bulbasaur',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        //         }
        //     },
        //     {
        //         name: 'Hitmonlee',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
        //         }
        //     },
        //     {
        //         name: 'John Doe',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        //         }
        //     },
        //     {
        //         name: 'Pikachu',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
        //         }
        //     },
        //     {
        //         name: 'Bulbasaur',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        //         }
        //     },
        //     {
        //         name: 'Hitmonlee',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
        //         }
        //     },
        //     {
        //         name: 'John Doe',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        //         }
        //     },
        //     {
        //         name: 'Pikachu',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
        //         }
        //     },
        //     {
        //         name: 'Bulbasaur',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        //         }
        //     },
        //     {
        //         name: 'Hitmonlee',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
        //         }
        //     },
        //     {
        //         name: 'John Doe',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        //         }
        //     },
        //     {
        //         name: 'Pikachu',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
        //         }
        //     },
        //     {
        //         name: 'Bulbasaur',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        //         }
        //     },
        //     {
        //         name: 'Hitmonlee',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
        //         }
        //     },
        //     {
        //         name: 'John Doe',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        //         }
        //     },
        //     {
        //         name: 'Pikachu',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
        //         }
        //     },
        //     {
        //         name: 'Bulbasaur',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        //         }
        //     },
        //     {
        //         name: 'Hitmonlee',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
        //         }
        //     },
        //     {
        //         name: 'John Doe',
        //         sprites: {
        //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        //         }
        //     }
        // ];

        var renderPokemons = () => {
            return pokemons.pokemons.map(
                (pokemon, index) => {
                    return (
                        <div key={pokemon.id} className="col-sm-3">
                            <Pokemon {...pokemon} />
                        </div>
                    );
                }
            )
        };

        return (
            <div id="pokemon-list">
                <div className="row">
                    { renderPokemons() }
                </div>
            </div>
        );
    }
}

module.exports = connect(
    (state) => (
        {
            pokemons: state.pokemons
        }
    ))(PokemonList);