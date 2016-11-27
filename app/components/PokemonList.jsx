var React = require('react');
var { connect } = require('react-redux');

var { getPokemons } = require('../actions');
var Pokemon = require('./Pokemon');

class PokemonList extends React.Component {
    
    componentDidMount() {
        var { dispatch } = this.props;

        dispatch(getPokemons());
    }

    filterPokemons(pokemons, filterName, filterType){
        var filteredPokemons = pokemons;

        if (filterType) {
            filteredPokemons = filteredPokemons.filter((pokemon) => {
                if (pokemon.types.find((type) => (type.type.name === filterType))) {
                    return true;
                }
            });
        }
        
        filteredPokemons = filteredPokemons.filter((pokemon) => {
            return filterName.length === 0 || pokemon.name.indexOf(filterName) > -1;
        });

        return filteredPokemons;
    }

    render() {
        var { pokemons, filter } = this.props;

        var filteredPokemons = this.filterPokemons(pokemons, filter.name, filter.type);

        var renderTypeMessage = () => {
            if (filter.type) {
                return (<p>Type: { filter.type }</p>);
            }
        }

        var renderPokemons = () => {
            return filteredPokemons.map(
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
                { renderTypeMessage() }
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
            pokemons: state.pokemons,
            filter: state.pokemonFilter
        }
    )
)(PokemonList);