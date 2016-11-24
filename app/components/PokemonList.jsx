var React = require('react');
var { connect } = require('react-redux');

class PokemonList extends React.Component {
    render() {
        var { pokemons } = this.props;

        var renderPokemons = () => (
            pokemons.map((pokemon, index) => (<div key={ index }>{ pokemon }</div>))
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