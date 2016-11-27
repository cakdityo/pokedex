var React = require('react');
var { connect } = require('react-redux');

var { setFilterPokemonName } = require('../actions');

class PokemonFilter extends React.Component {

    constructor(){
        super();

        this.filterByName = this.filterByName.bind(this);
    }

    filterByName(){
        var { dispatch } = this.props;
        var name = this.filter.value;
        dispatch(setFilterPokemonName(name));
    }

    render(){
        return (
            <div className="row" id="pokemon-search">
                <input onChange={ this.filterByName } ref={filter => this.filter = filter} type="text" className="form-control" placeholder="Filter pokemon by name"/>
            </div>
        );
    }
}

module.exports = connect()(PokemonFilter);