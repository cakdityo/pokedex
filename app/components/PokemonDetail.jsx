var React = require('react');
var { connect } = require('react-redux');
var { browserHistory } = require('react-router');

var { getPokemonDetail } = require('../actions');

class PokemonDetail extends React.Component {

    componentDidMount() {
        var { dispatch, params, location } = this.props;

        dispatch(getPokemonDetail(params.pokemonName));
        $('#pokemon-detail').modal('show');
        $('#pokemon-detail').on('hidden.bs.modal', () => {
            this.props.router.push('/');
        });
    }

    render(){
        var { pokemon } = this.props;

        var renderTypes = () => {
            return pokemon.types.map((type, index) => {
                return (<li key={ index }>{ type.type.name }</li>)
            });
        }

        var renderAbilities = () => {
            return pokemon.abilities.map((ability, index) => {
                return (<li key={ index }>{ ability.ability.name }</li>)
            });
        }

        var renderStatus = () => {
            return pokemon.stats.map((stat, index) => {
                return (<li key={ index }> <strong>{ stat.stat.name } </strong>: { stat.base_stat }</li>)
            })
        }

        return (
            <div id="pokemon-detail" className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">{ pokemon.name }</h4>
                        </div>
                        <div className="modal-body">
                            <div className="img-container">
                                <img src={ pokemon.sprites.front_default } alt={ pokemon.name }/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <h4>Types:</h4>
                            <ul>
                                { renderTypes() }
                            </ul>
                            <h4>Abilities:</h4>
                            <ul>
                                { renderAbilities() }
                            </ul>
                            <h4>Status:</h4>
                            <ul>
                                { renderStatus() }
                            </ul>
                        </div>
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