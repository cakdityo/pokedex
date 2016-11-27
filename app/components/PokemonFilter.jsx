var React = require('react');
var { connect } = require('react-redux');

var { setFilterPokemonName, setFilterPokemonType, getPokemonTypeDetail, getPokemonTypes } = require('../actions');

class PokemonFilter extends React.Component {

    constructor(){
        super();

        this.filterByName = this.filterByName.bind(this);
        this.filterByType = this.filterByType.bind(this);
    }

    componentDidMount(){
        var { dispatch } = this.props;
        
        dispatch(getPokemonTypes());
    }

    filterByName(){
        var { dispatch } = this.props;
        var name = this.name.value;
        dispatch(setFilterPokemonName(name));
    }

    filterByType(){
        var { dispatch } = this.props;
        var typeName = this.type.value;
        dispatch(setFilterPokemonType(typeName));
        if (typeName.length > 0) {
            dispatch(getPokemonTypeDetail(typeName));
        }
    }

    render(){
        var { types } = this.props;

        var renderTypes = () => {
            return types.map((type) => {
                return (
                    <option key={ type.name } value={ type.name }>{ type.name }</option>
                );
            });
        }

        return (
            <div className="row" id="pokemon-search">
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="name">Name:</label>
                        <div className="col-sm-10">
                            <input id="name" onChange={ this.filterByName } ref={name => this.name = name} type="search" className="form-control" placeholder="Enter Pokemon name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="type">Type:</label>
                        <div className="col-sm-10">
                            <select onChange={ this.filterByType } id="type" className="form-control" ref={type => this.type = type}>
                                <option value=''>All</option>
                                { renderTypes() }
                            </select>
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
            types: state.types
        }
    )
)(PokemonFilter);