var React = require('React');

class Pokemon extends React.Component {
    render() {
        var { name, sprites } = this.props;
        return (
            <div className="pokemon thumbnail">
                <img src={ sprites.front_default } alt={ name } />
                <div className="caption">
                    <p>{ name }</p>
                </div>
            </div>
        );
    }
}

module.exports = Pokemon;