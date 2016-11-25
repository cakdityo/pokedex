var React = require('react');
var ReactDOM = require('react-dom');
var { Router, Route, browserHistory, IndexRoute } = require('react-router');
var { Provider } = require('react-redux');

window.store = require('./store/configureStore')();
var AppRoot = require('./components/AppRoot');
var PokemonList = require('./components/PokemonList');

require('./miscellaneous');

ReactDOM.render(
    <Provider store={ window.store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ AppRoot }>
                <IndexRoute component={ PokemonList }></IndexRoute>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#app')
);