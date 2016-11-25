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
	var PokemonList = __webpack_require__(291);
	var PokemonDetail = __webpack_require__(332);

	__webpack_require__(319);
	__webpack_require__(321);

	ReactDOM.render(React.createElement(
	    Provider,
	    { store: window.store },
	    React.createElement(
	        Router,
	        { history: browserHistory },
	        React.createElement(
	            Route,
	            { path: '/', component: AppRoot },
	            React.createElement(Route, { path: ':pokemonName', component: PokemonDetail })
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
	    pokemonsReducer = _require.pokemonsReducer,
	    pokemonDetailReducer = _require.pokemonDetailReducer;

	module.exports = function () {
	    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    var reducer = redux.combineReducers({
	        pokemons: pokemonsReducer,
	        pokemonDetail: pokemonDetailReducer
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
	    pokemonsReducer: pokemonsReducer,
	    pokemonDetailReducer: pokemonDetailReducer
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

	function pokemonDetailReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : setDefaultPokemonDetail();
	    var action = arguments[1];


	    switch (action.type) {
	        case 'SET_POKEMON_DETAIL':
	            return Object.assign({}, action.pokemon);
	        default:
	            return state;
	    }
	}

	function setDefaultPokemonDetail() {
	    return {
	        name: '',
	        sprites: {
	            front_default: '',
	            back_default: ''
	        }
	    };
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

	var Navbar = __webpack_require__(265);
	var PokemonList = __webpack_require__(291);

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
	                React.createElement(Navbar, null),
	                React.createElement(
	                    'div',
	                    { className: 'container' },
	                    React.createElement(
	                        'div',
	                        { className: 'row' },
	                        React.createElement(
	                            'div',
	                            { className: 'col-sm-6' },
	                            this.props.children
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'col-sm-6' },
	                            React.createElement(
	                                'div',
	                                { className: 'row', id: 'pokemon-search' },
	                                React.createElement('input', { type: 'search', className: 'form-control', placeholder: 'Filter pokemon by name' })
	                            ),
	                            React.createElement(PokemonList, null)
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return AppRoot;
	}(React.Component);

	module.exports = AppRoot;

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var Navbar = function (_React$Component) {
	    _inherits(Navbar, _React$Component);

	    function Navbar() {
	        _classCallCheck(this, Navbar);

	        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
	    }

	    _createClass(Navbar, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "nav",
	                { className: "navbar navbar-default" },
	                React.createElement(
	                    "div",
	                    { className: "container" },
	                    React.createElement(
	                        "div",
	                        { className: "navbar-header" },
	                        React.createElement(
	                            "a",
	                            { className: "navbar-brand", href: "#" },
	                            "Pok\xE9dex"
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Navbar;
	}(React.Component);

	module.exports = Navbar;

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(233),
	    connect = _require.connect;

	var _require2 = __webpack_require__(292),
	    getPokemons = _require2.getPokemons;

	var Pokemon = __webpack_require__(318);

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
	            // var fake = [
	            //     {
	            //         name: 'Pikachu',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Bulbasaur',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Hitmonlee',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'John Doe',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Pikachu',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Bulbasaur',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Hitmonlee',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'John Doe',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Pikachu',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Bulbasaur',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Hitmonlee',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'John Doe',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Pikachu',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Bulbasaur',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Hitmonlee',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'John Doe',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Pikachu',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Bulbasaur',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'Hitmonlee',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
	            //         }
	            //     },
	            //     {
	            //         name: 'John Doe',
	            //         sprites: {
	            //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
	            //         }
	            //     }
	            // ];

	            var renderPokemons = function renderPokemons() {
	                return pokemons.pokemons.map(function (pokemon, index) {
	                    return React.createElement(
	                        'div',
	                        { key: pokemon.id, className: 'col-sm-3' },
	                        React.createElement(Pokemon, pokemon)
	                    );
	                });
	            };

	            return React.createElement(
	                'div',
	                { id: 'pokemon-list' },
	                React.createElement(
	                    'div',
	                    { className: 'row' },
	                    renderPokemons()
	                )
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

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var axios = __webpack_require__(293);

	module.exports = {
	    getPokemons: getPokemons,
	    getPokemonDetail: getPokemonDetail
	};

	function getPokemons() {
	    return function (dispatch, getState) {
	        var _getState = getState(),
	            pokemons = _getState.pokemons;

	        axios.get('/api/pokemons?next=' + pokemons.next).then(function (newPokemons) {

	            dispatch(_setNextPokemons(newPokemons.data.next));

	            newPokemons.data.results.forEach(function (newPokemon) {
	                axios.get('/api/pokemon?name=' + newPokemon.name).then(function (pokemon) {

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

	function getPokemonDetail(name) {
	    return function (dispatch) {
	        axios.get('/api/pokemon?name=' + name).then(function (pokemon) {
	            dispatch(_setPokemonDetail(pokemon.data));
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

	function _setPokemonDetail(pokemon) {
	    return {
	        type: 'SET_POKEMON_DETAIL',
	        pokemon: pokemon
	    };
	}

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(178),
	    Link = _require.Link;

	var Pokemon = function (_React$Component) {
	    _inherits(Pokemon, _React$Component);

	    function Pokemon() {
	        _classCallCheck(this, Pokemon);

	        return _possibleConstructorReturn(this, (Pokemon.__proto__ || Object.getPrototypeOf(Pokemon)).apply(this, arguments));
	    }

	    _createClass(Pokemon, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                name = _props.name,
	                sprites = _props.sprites;

	            return React.createElement(
	                Link,
	                { to: '' + name, className: 'pokemon thumbnail' },
	                React.createElement('img', { src: sprites.front_default, alt: name }),
	                React.createElement(
	                    'div',
	                    { className: 'caption' },
	                    React.createElement(
	                        'p',
	                        null,
	                        name
	                    )
	                )
	            );
	        }
	    }]);

	    return Pokemon;
	}(React.Component);

	module.exports = Pokemon;

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _require = __webpack_require__(292),
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320)))

/***/ },

/***/ 321:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(233),
	    connect = _require.connect;

	var _require2 = __webpack_require__(292),
	    getPokemonDetail = _require2.getPokemonDetail;

	var PokemonDetail = function (_React$Component) {
	    _inherits(PokemonDetail, _React$Component);

	    function PokemonDetail() {
	        _classCallCheck(this, PokemonDetail);

	        return _possibleConstructorReturn(this, (PokemonDetail.__proto__ || Object.getPrototypeOf(PokemonDetail)).apply(this, arguments));
	    }

	    _createClass(PokemonDetail, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _props = this.props,
	                dispatch = _props.dispatch,
	                params = _props.params;


	            dispatch(getPokemonDetail(params.pokemonName));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var pokemon = this.props.pokemon;


	            return React.createElement(
	                'div',
	                { id: 'pokemon-detail', className: 'row' },
	                React.createElement(
	                    'h1',
	                    null,
	                    pokemon.name
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'row' },
	                    React.createElement(
	                        'div',
	                        { className: 'col-sm-offset-4 col-sm-2' },
	                        React.createElement('img', { src: pokemon.sprites.front_default, alt: '' })
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'col-sm-2' },
	                        React.createElement('img', { src: pokemon.sprites.back_default, alt: '' })
	                    )
	                )
	            );
	        }
	    }]);

	    return PokemonDetail;
	}(React.Component);

	module.exports = connect(function (state) {
	    return {
	        pokemon: state.pokemonDetail
	    };
	})(PokemonDetail);

/***/ }

});