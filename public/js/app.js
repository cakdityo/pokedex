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

	var _require2 = __webpack_require__(235),
	    Provider = _require2.Provider;

	var store = __webpack_require__(291)({ pokemons: ['Bulbasaur', 'Pikachu'] });
	var AppRoot = __webpack_require__(233);
	var PokemonList = __webpack_require__(234);

	ReactDOM.render(React.createElement(
	    Provider,
	    { store: store },
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

/***/ 233:
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

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(235),
	    connect = _require.connect;

	var PokemonList = function (_React$Component) {
	    _inherits(PokemonList, _React$Component);

	    function PokemonList() {
	        _classCallCheck(this, PokemonList);

	        return _possibleConstructorReturn(this, (PokemonList.__proto__ || Object.getPrototypeOf(PokemonList)).apply(this, arguments));
	    }

	    _createClass(PokemonList, [{
	        key: 'render',
	        value: function render() {
	            var pokemons = this.props.pokemons;


	            var renderPokemons = function renderPokemons() {
	                return pokemons.map(function (pokemon, index) {
	                    return React.createElement(
	                        'div',
	                        { key: index },
	                        pokemon
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

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var redux = __webpack_require__(242);
	var thunk = __webpack_require__(263).default;

	var _require = __webpack_require__(292),
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

/***/ 292:
/***/ function(module, exports) {

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	module.exports = {
	    pokemonsReducer: pokemonsReducer
	};

	function pokemonsReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];


	    switch (action.type) {
	        case 'GET_POKEMONS':
	            return [].concat(_toConsumableArray(action.pokemons));
	        default:
	            return state;
	    }
	}

/***/ }

});