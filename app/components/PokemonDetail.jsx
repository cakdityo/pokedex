var React = require('react');
var { connect } = require('react-redux');

var { getPokemonDetail } = require('../actions');

class PokemonDetail extends React.Component {

    componentDidMount(){
        var { dispatch, params } = this.props;

        dispatch(getPokemonDetail(params.pokemonName));
    }

    render(){
        var { pokemon } = this.props;

        return (
            <div id="pokemon-detail" className="row">
                <h1>{ pokemon.name }</h1>
                <div className="row">
                    <div className="col-sm-offset-4 col-sm-2">
                        <img src={ pokemon.sprites.front_default } alt=""/>
                    </div>
                    <div className="col-sm-2">
                        <img src={ pokemon.sprites.back_default } alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = connect(
    (state) => (
        {
            pokemon: state.pokemonDetail
        }
    )
)(PokemonDetail);