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
	var PokemonList = __webpack_require__(293);
	var PokemonDetail = __webpack_require__(295);

	__webpack_require__(296);
	__webpack_require__(298);

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
	    pokemonNextReducer = _require.pokemonNextReducer,
	    pokemonsReducer = _require.pokemonsReducer,
	    pokemonDetailReducer = _require.pokemonDetailReducer,
	    pokemonFilterReducer = _require.pokemonFilterReducer,
	    pokemonTypesReducer = _require.pokemonTypesReducer;

	module.exports = function () {
	    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    var reducer = redux.combineReducers({
	        next: pokemonNextReducer,
	        pokemons: pokemonsReducer,
	        pokemonDetail: pokemonDetailReducer,
	        pokemonFilter: pokemonFilterReducer,
	        types: pokemonTypesReducer
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
	    pokemonNextReducer: pokemonNextReducer,
	    pokemonsReducer: pokemonsReducer,
	    pokemonDetailReducer: pokemonDetailReducer,
	    pokemonFilterReducer: pokemonFilterReducer,
	    pokemonTypesReducer: pokemonTypesReducer
	};

	function pokemonNextReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var action = arguments[1];


	    switch (action.type) {
	        case 'SET_NEXT_POKEMONS':
	            return action.next;
	        default:
	            return state;
	    }
	}

	function pokemonsReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];


	    switch (action.type) {
	        case 'INIT_POKEMONS':
	            return [].concat(_toConsumableArray(state), _toConsumableArray(action.pokemons));
	        case 'SET_POKEMON':
	            return [].concat(_toConsumableArray(state), [action.pokemon]);
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

	function pokemonFilterReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: '', type: '' };
	    var action = arguments[1];


	    switch (action.type) {
	        case 'SET_FILTER_POKEMON_NAME':
	            return Object.assign({}, state, { name: action.name });
	        case 'SET_FILTER_POKEMON_TYPE':
	            return Object.assign({}, state, { type: action._type });
	        default:
	            return state;
	    }
	}

	function pokemonTypesReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];


	    switch (action.type) {
	        case 'SET_TYPES':
	            return [].concat(_toConsumableArray(action.types));
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
	        },
	        types: [],
	        abilities: [],
	        stats: []
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
	var PokemonFilter = __webpack_require__(266);
	var PokemonList = __webpack_require__(293);

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
	                            { className: ' col-sm-offset-3 col-sm-6' },
	                            React.createElement(PokemonFilter, null),
	                            React.createElement(PokemonList, null),
	                            this.props.children
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

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(178),
	    Link = _require.Link;

	var Navbar = function (_React$Component) {
	    _inherits(Navbar, _React$Component);

	    function Navbar() {
	        _classCallCheck(this, Navbar);

	        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
	    }

	    _createClass(Navbar, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'nav',
	                { className: 'navbar navbar-default' },
	                React.createElement(
	                    'div',
	                    { className: 'container' },
	                    React.createElement(
	                        'div',
	                        { className: 'navbar-header' },
	                        React.createElement(
	                            Link,
	                            { to: '/', className: 'navbar-brand' },
	                            'Pok\xE9dex'
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

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(233),
	    connect = _require.connect;

	var _require2 = __webpack_require__(267),
	    setFilterPokemonName = _require2.setFilterPokemonName,
	    setFilterPokemonType = _require2.setFilterPokemonType,
	    getPokemonTypeDetail = _require2.getPokemonTypeDetail,
	    getPokemonTypes = _require2.getPokemonTypes;

	var PokemonFilter = function (_React$Component) {
	    _inherits(PokemonFilter, _React$Component);

	    function PokemonFilter() {
	        _classCallCheck(this, PokemonFilter);

	        var _this = _possibleConstructorReturn(this, (PokemonFilter.__proto__ || Object.getPrototypeOf(PokemonFilter)).call(this));

	        _this.filterByName = _this.filterByName.bind(_this);
	        _this.filterByType = _this.filterByType.bind(_this);
	        return _this;
	    }

	    _createClass(PokemonFilter, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var dispatch = this.props.dispatch;


	            dispatch(getPokemonTypes());
	        }
	    }, {
	        key: 'filterByName',
	        value: function filterByName() {
	            var dispatch = this.props.dispatch;

	            var name = this.name.value;
	            dispatch(setFilterPokemonName(name));
	        }
	    }, {
	        key: 'filterByType',
	        value: function filterByType() {
	            var dispatch = this.props.dispatch;

	            var typeName = this.type.value;
	            dispatch(setFilterPokemonType(typeName));
	            if (typeName.length > 0) {
	                dispatch(getPokemonTypeDetail(typeName));
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var types = this.props.types;


	            var renderTypes = function renderTypes() {
	                return types.map(function (type) {
	                    return React.createElement(
	                        'option',
	                        { key: type.name, value: type.name },
	                        type.name
	                    );
	                });
	            };

	            return React.createElement(
	                'div',
	                { className: 'row', id: 'pokemon-search' },
	                React.createElement(
	                    'div',
	                    { className: 'form-horizontal' },
	                    React.createElement(
	                        'div',
	                        { className: 'form-group' },
	                        React.createElement(
	                            'label',
	                            { className: 'col-sm-2 control-label', htmlFor: 'name' },
	                            'Name:'
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'col-sm-10' },
	                            React.createElement('input', { id: 'name', onChange: this.filterByName, ref: function ref(name) {
	                                    return _this2.name = name;
	                                }, type: 'search', className: 'form-control', placeholder: 'Enter Pokemon name' })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'form-group' },
	                        React.createElement(
	                            'label',
	                            { className: 'col-sm-2 control-label', htmlFor: 'type' },
	                            'Type:'
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'col-sm-10' },
	                            React.createElement(
	                                'select',
	                                { onChange: this.filterByType, id: 'type', className: 'form-control', ref: function ref(type) {
	                                        return _this2.type = type;
	                                    } },
	                                React.createElement(
	                                    'option',
	                                    { value: '' },
	                                    'All'
	                                ),
	                                renderTypes()
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return PokemonFilter;
	}(React.Component);

	module.exports = connect(function (state) {
	    return {
	        types: state.types
	    };
	})(PokemonFilter);

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var axios = __webpack_require__(268);

	module.exports = {
	    getPokemons: getPokemons,
	    getPokemonDetail: getPokemonDetail,
	    getPokemonTypes: getPokemonTypes,
	    getPokemonTypeDetail: getPokemonTypeDetail,
	    setFilterPokemonName: setFilterPokemonName,
	    setFilterPokemonType: setFilterPokemonType
	};

	var rootUrl = 'https://pokecak.herokuapp.com/api';

	function getPokemons() {
	    return function (dispatch, getState) {
	        var _getState = getState(),
	            next = _getState.next,
	            pokemons = _getState.pokemons;

	        // Looking for offset 


	        var offset = next.match(/[0-9]+/g);
	        // Reg Exp above always return ['2', OFFSET_NUMBER]
	        // So I have to get the array index 1 element
	        // I don't know better RegExp to implement this
	        if (offset !== null) {
	            offset = offset[1];
	        }

	        axios.get(rootUrl + '/pokemon?offset=' + offset).then(function (newPokemons) {

	            dispatch(_setNextPokemons(newPokemons.data.next));

	            newPokemons.data.results.forEach(function (newPokemon) {
	                // Only fetch if pokemon has not been fectched yet
	                if (!pokemons.find(function (fetchedPokemon) {
	                    return fetchedPokemon.name === newPokemon.name;
	                })) {
	                    axios.get(rootUrl + '/pokemon/' + newPokemon.name).then(function (pokemon) {
	                        dispatch(_setPokemon(pokemon.data));
	                    });
	                }
	            });
	        });
	    };
	}

	function getPokemonDetail(name) {
	    return function (dispatch, getState) {
	        var pokemons = getState().pokemons;
	        var fetchedPokemon = pokemons.find(function (fetchedPokemon) {
	            return fetchedPokemon.name === name;
	        });

	        if (fetchedPokemon) {
	            dispatch(_setPokemonDetail(fetchedPokemon));
	        } else {
	            axios.get(rootUrl + '/pokemon/' + name).then(function (pokemon) {
	                dispatch(_setPokemonDetail(pokemon.data));
	            });
	        }
	    };
	}

	function getPokemonTypes() {
	    return function (dispatch) {
	        axios.get(rootUrl + '/type').then(function (types) {
	            dispatch(_setPokemonTypes(types.data.results));
	        });
	    };
	}

	function getPokemonTypeDetail(typeName) {
	    return function (dispatch, getState) {

	        // Fetch specified type with its all pokemons
	        axios.get(rootUrl + '/type/' + typeName).then(function (type) {
	            var _getState2 = getState(),
	                pokemons = _getState2.pokemons;

	            // Iterate over all pokemons in associated type


	            type.data.pokemon.forEach(function (pokemon) {

	                // Only fetch if pokemon has not been fectched yet
	                if (!pokemons.find(function (fetchedPokemon) {
	                    return fetchedPokemon.name === pokemon.pokemon.name;
	                })) {
	                    axios.get(rootUrl + '/pokemon/' + pokemon.pokemon.name).then(function (pokemon) {
	                        dispatch(_setPokemon(pokemon.data));
	                    });
	                }
	            });
	        });
	    };
	}

	function setFilterPokemonName(name) {
	    return {
	        type: 'SET_FILTER_POKEMON_NAME',
	        name: name
	    };
	}

	function setFilterPokemonType(_type) {
	    return {
	        type: 'SET_FILTER_POKEMON_TYPE',
	        _type: _type
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

	function _setPokemonTypes(types) {
	    return {
	        type: 'SET_TYPES',
	        types: types
	    };
	}

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(233),
	    connect = _require.connect;

	var _require2 = __webpack_require__(267),
	    getPokemons = _require2.getPokemons;

	var Pokemon = __webpack_require__(294);

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
	        key: 'filterPokemons',
	        value: function filterPokemons(pokemons, filterName, filterType) {
	            var filteredPokemons = pokemons;

	            if (filterType) {
	                filteredPokemons = filteredPokemons.filter(function (pokemon) {
	                    if (pokemon.types.find(function (type) {
	                        return type.type.name === filterType;
	                    })) {
	                        return true;
	                    }
	                });
	            }

	            filteredPokemons = filteredPokemons.filter(function (pokemon) {
	                return filterName.length === 0 || pokemon.name.indexOf(filterName) > -1;
	            });

	            return filteredPokemons;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                pokemons = _props.pokemons,
	                filter = _props.filter;


	            var filteredPokemons = this.filterPokemons(pokemons, filter.name, filter.type);

	            var renderTypeMessage = function renderTypeMessage() {
	                if (filter.type) {
	                    return React.createElement(
	                        'p',
	                        null,
	                        'Type: ',
	                        filter.type
	                    );
	                }
	            };

	            var renderPokemons = function renderPokemons() {
	                return filteredPokemons.map(function (pokemon, index) {
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
	                renderTypeMessage(),
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
	        pokemons: state.pokemons,
	        filter: state.pokemonFilter
	    };
	})(PokemonList);

/***/ },

/***/ 294:
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

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(233),
	    connect = _require.connect;

	var _require2 = __webpack_require__(178),
	    browserHistory = _require2.browserHistory;

	var _require3 = __webpack_require__(267),
	    getPokemonDetail = _require3.getPokemonDetail;

	var PokemonDetail = function (_React$Component) {
	    _inherits(PokemonDetail, _React$Component);

	    function PokemonDetail() {
	        _classCallCheck(this, PokemonDetail);

	        return _possibleConstructorReturn(this, (PokemonDetail.__proto__ || Object.getPrototypeOf(PokemonDetail)).apply(this, arguments));
	    }

	    _createClass(PokemonDetail, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            var _props = this.props,
	                dispatch = _props.dispatch,
	                params = _props.params,
	                location = _props.location;


	            dispatch(getPokemonDetail(params.pokemonName));
	            $('#pokemon-detail').modal('show');
	            $('#pokemon-detail').on('hidden.bs.modal', function () {
	                _this2.props.router.push('/');
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var pokemon = this.props.pokemon;


	            var renderTypes = function renderTypes() {
	                return pokemon.types.map(function (type, index) {
	                    return React.createElement(
	                        'li',
	                        { key: index },
	                        type.type.name
	                    );
	                });
	            };

	            var renderAbilities = function renderAbilities() {
	                return pokemon.abilities.map(function (ability, index) {
	                    return React.createElement(
	                        'li',
	                        { key: index },
	                        ability.ability.name
	                    );
	                });
	            };

	            var renderStatus = function renderStatus() {
	                return pokemon.stats.map(function (stat, index) {
	                    return React.createElement(
	                        'li',
	                        { key: index },
	                        ' ',
	                        React.createElement(
	                            'strong',
	                            null,
	                            stat.stat.name,
	                            ' '
	                        ),
	                        ': ',
	                        stat.base_stat
	                    );
	                });
	            };

	            return React.createElement(
	                'div',
	                { id: 'pokemon-detail', className: 'modal fade bs-example-modal-sm', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'mySmallModalLabel' },
	                React.createElement(
	                    'div',
	                    { className: 'modal-dialog modal-sm', role: 'document' },
	                    React.createElement(
	                        'div',
	                        { className: 'modal-content' },
	                        React.createElement(
	                            'div',
	                            { className: 'modal-header' },
	                            React.createElement(
	                                'button',
	                                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
	                                React.createElement(
	                                    'span',
	                                    { 'aria-hidden': 'true' },
	                                    '\xD7'
	                                )
	                            ),
	                            React.createElement(
	                                'h4',
	                                { className: 'modal-title' },
	                                pokemon.name
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'modal-body' },
	                            React.createElement(
	                                'div',
	                                { className: 'img-container' },
	                                React.createElement('img', { src: pokemon.sprites.front_default, alt: pokemon.name })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'modal-footer' },
	                            React.createElement(
	                                'h4',
	                                null,
	                                'Types:'
	                            ),
	                            React.createElement(
	                                'ul',
	                                null,
	                                renderTypes()
	                            ),
	                            React.createElement(
	                                'h4',
	                                null,
	                                'Abilities:'
	                            ),
	                            React.createElement(
	                                'ul',
	                                null,
	                                renderAbilities()
	                            ),
	                            React.createElement(
	                                'h4',
	                                null,
	                                'Status:'
	                            ),
	                            React.createElement(
	                                'ul',
	                                null,
	                                renderStatus()
	                            )
	                        )
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(297)))

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _require = __webpack_require__(267),
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(297)))

/***/ },

/***/ 298:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});