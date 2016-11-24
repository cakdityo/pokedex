var React = require('react');
var ReactDOM = require('react-dom');
var { Router, Route, browserHistory, IndexRoute } = require('react-router');
var { Provider } = require('react-redux');

var store = require('./store/configureStore')({ pokemons: ['Bulbasaur', 'Pikachu'] });
var AppRoot = require('./components/AppRoot');
var PokemonList = require('./components/PokemonList');

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ AppRoot }>
                <IndexRoute component={ PokemonList }></IndexRoute>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#app')
);