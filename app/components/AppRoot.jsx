var React = require('react');

class AppRoot extends React.Component {
    render(){
        return (
            <div>
                <h1>Root App!</h1>
                { this.props.children }
            </div>
        );
    }
}

module.exports = AppRoot;