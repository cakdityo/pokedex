var React = require('react');
var { connect } = require('react-redux');

var { getPokemons } = require('../actions');

class PokemonList extends React.Component {

    componentDidMount() {
        var { dispatch } = this.props;

        dispatch(getPokemons());
    }

    render() {
        var { pokemons } = this.props;

        var renderPokemons = () => (
            pokemons.results.map((pokemon, index) => (<div key={ index }>{ pokemon }</div>))
        );

        return (
            <div>
                <h1>List of Pokemons</h1>
                { renderPokemons() }
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