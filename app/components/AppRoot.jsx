var React = require('react');

var Navbar = require('./Navbar');
var PokemonList = require('./PokemonList');

class AppRoot extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            { this.props.children }
                        </div>
                        <div className="col-sm-6">
                            <div className="row" id="pokemon-search">
                                <input type="search" className="form-control" placeholder="Filter pokemon by name"/>
                            </div>
                            <PokemonList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = AppRoot;