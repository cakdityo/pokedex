var React = require('react');
var ReactDOM = require('react-dom');
var { Router, Route, browserHistory, IndexRoute } = require('react-router');

var AppRoot = require('./components/AppRoot');
var PokemonList = require('./components/PokemonList');

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ AppRoot }>
            <IndexRoute component={ PokemonList }></IndexRoute>
        </Route>
    </Router>,
    document.querySelector('#app')
);