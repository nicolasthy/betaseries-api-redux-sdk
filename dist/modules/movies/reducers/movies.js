'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = moviesReducer;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _arrayToHash = require('../../../utils/func/arrayToHash');

var _arrayToHash2 = _interopRequireDefault(_arrayToHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

/**
 * List of movies
 *
 * **Actions listened**:
 *
 *  * `FETCH_FAVORITE_MOVIES`
 *  * `FETCH_MEMBER_MOVIES`
 *  * `FETCH_MOVIE`
 *
 * @alias module:Movies.movies
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('movies', 'movies');
 *
 * // state value example
 * {
 *   '12': {      // movie ID
 *     id: 12,    // movie element
 *     ...movie,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
function moviesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.FETCH_FAVORITE_MOVIES:
    case _constants2.default.FETCH_MEMBER_MOVIES:
      return _extends({}, state, (0, _arrayToHash2.default)(action.payload.movies));

    case _constants2.default.FETCH_MOVIE:
      return _extends({}, state, (0, _arrayToHash2.default)([action.payload.movie]));

    default:
      return state;
  }
}