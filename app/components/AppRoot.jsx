var React = require('react');

var Navbar = require('./Navbar');
var PokemonFilter = require('./PokemonFilter');
var PokemonList = require('./PokemonList');

class AppRoot extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className=" col-sm-offset-3 col-sm-6">
                            <PokemonFilter />
                            <PokemonList />
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = AppRoot;