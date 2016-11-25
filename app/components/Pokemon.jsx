var React = require('react');
var { Link } = require('react-router');

class Pokemon extends React.Component {
    render() {
        var { name, sprites } = this.props;
        return (
            <Link to={`${ name }`} className="pokemon thumbnail">
                <img src={ sprites.front_default } alt={ name } />
                <div className="caption">
                    <p>{ name }</p>
                </div>
            </Link>
        );
    }
}

module.exports = Pokemon;