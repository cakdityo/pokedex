webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(32);

	var _require = __webpack_require__(178),
	    Router = _require.Router,
	    Route = _require.Route,
	    browserHistory = _require.browserHistory,
	    IndexRoute = _require.IndexRoute;

	var _require2 = __webpack_require__(233),
	    Provider = _require2.Provider;

	window.store = __webpack_require__(261)();
	var AppRoot = __webpack_require__(264);
	var PokemonList = __webpack_require__(265);

	__webpack_require__(292);

	ReactDOM.render(React.createElement(
	    Provider,
	    { store: window.store },
	    React.createElement(
	        Router,
	        { history: browserHistory },
	        React.createElement(
	            Route,
	            { path: '/', component: AppRoot },
	            React.createElement(IndexRoute, { component: PokemonList })
	        )
	    )
	), document.querySelector('#app'));

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var redux = __webpack_require__(240);
	var thunk = __webpack_require__(262).default;

	var _require = __webpack_require__(263),
	    pokemonsReducer = _require.pokemonsReducer;

	module.exports = function () {
	    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    var reducer = redux.combineReducers({
	        pokemons: pokemonsReducer
	    });

	    var store = redux.createStore(reducer, initialState,
	    // Add THUNK middleware for handling asynchronous actions
	    redux.compose(redux.applyMiddleware(thunk)));

	    return store;
	};

/***/ },

/***/ 263:
/***/ function(module, exports) {

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	module.exports = {
	    pokemonsReducer: pokemonsReducer
	};

	function pokemonsReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { pokemons: [], next: 'https://pokeapi.co/api/v2/pokemon' };
	    var action = arguments[1];


	    switch (action.type) {
	        case 'SET_POKEMON':
	            return Object.assign({}, state, {
	                pokemons: [].concat(_toConsumableArray(state.pokemons), [action.pokemon])
	            });
	        case 'SET_NEXT_POKEMONS':
	            return Object.assign({}, state, {
	                next: action.next
	            });
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var AppRoot = function (_React$Component) {
	    _inherits(AppRoot, _React$Component);

	    function AppRoot() {
	        _classCallCheck(this, AppRoot);

	        return _possibleConstructorReturn(this, (AppRoot.__proto__ || Object.getPrototypeOf(AppRoot)).apply(this, arguments));
	    }

	    _createClass(AppRoot, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h1',
	                    null,
	                    'Root App!'
	                ),
	                this.props.children
	            );
	        }
	    }]);

	    return AppRoot;
	}(React.Component);

	module.exports = AppRoot;

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(233),
	    connect = _require.connect;

	var _require2 = __webpack_require__(266),
	    getPokemons = _require2.getPokemons;

	var PokemonList = function (_React$Component) {
	    _inherits(PokemonList, _React$Component);

	    function PokemonList() {
	        _classCallCheck(this, PokemonList);

	        return _possibleConstructorReturn(this, (PokemonList.__proto__ || Object.getPrototypeOf(PokemonList)).apply(this, arguments));
	    }

	    _createClass(PokemonList, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var dispatch = this.props.dispatch;


	            dispatch(getPokemons());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var pokemons = this.props.pokemons;


	            var renderPokemons = function renderPokemons() {
	                return pokemons.pokemons.map(function (pokemon, index) {
	                    return React.createElement(
	                        'div',
	                        { key: index },
	                        pokemon.id,
	                        ', ',
	                        pokemon.name,
	                        ', ',
	                        pokemon.weight
	                    );
	                });
	            };

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h1',
	                    null,
	                    'List of Pokemons'
	                ),
	                renderPokemons()
	            );
	        }
	    }]);

	    return PokemonList;
	}(React.Component);

	module.exports = connect(function (state) {
	    return {
	        pokemons: state.pokemons
	    };
	})(PokemonList);

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var axios = __webpack_require__(267);

	module.exports = {
	    getPokemons: getPokemons
	};

	function getPokemons() {
	    return function (dispatch, getState) {
	        var _getState = getState(),
	            pokemons = _getState.pokemons;

	        axios.get('/api/pokemons?next=' + pokemons.next).then(function (newPokemons) {

	            dispatch(_setNextPokemons(newPokemons.data.next));

	            newPokemons.data.results.forEach(function (newPokemon) {
	                axios.get('/api/pokemon?path=' + newPokemon.url).then(function (pokemon) {

	                    dispatch(_setPokemon(pokemon.data));
	                }, function (err) {
	                    throw err;
	                });
	            });
	        }, function (err) {
	            throw err;
	        });
	    };
	}

	// Private actions only called here
	// =========================================================================

	function _setPokemon(pokemon) {
	    return {
	        type: 'SET_POKEMON',
	        pokemon: pokemon
	    };
	}

	function _setNextPokemons(next) {
	    return {
	        type: 'SET_NEXT_POKEMONS',
	        next: next
	    };
	}

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _require = __webpack_require__(266),
	    getPokemons = _require.getPokemons;

	// ============ Performing infinite scroll ================
	// Add event listener for scrolling page
	// App will fetch another 20 pokemons imediately when user scroll the bottom of the page

	$(document).ready(function () {
	    $(window).scroll(function () {
	        // It only happens when touch the bottom of the page
	        if ($(window).scrollTop() + $(window).height() === $(document).height()) {
	            window.store.dispatch(getPokemons());
	        }
	    });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(293)))

/***/ }

});