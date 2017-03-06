import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve movies of the member
 *
 * **Dispatch**: `FETCH_MEMBER_MOVIES`
 *
 * @alias module:Movies.doFetchMemberMovies
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchMemberMovies')({ memberId: 1 });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.memberId]    Member ID
 * @param {Number}  [obj.state]       State of movie
 *   (`0` = to see, `1` = seen, `2` = doesn't want to see (`0` by default))
 * @param {Number}  [obj.start]       Used for paginate (`0` by default)
 * @param {Number}  [obj.limit]       Used for paginate (optional)
 * @param {String}  [obj.order]       Sort order (`alphabetical`, `popularity` (optional))
 *
 * @returns {Promise}
 */
const doFetchMemberMovies = ({
  memberId,
  state = 0,
  start = 0,
  limit = 50,
  order = 'alphabetical',
}) => dispatch => (
  ApiFetch.get('movies/member', { id: memberId, state, start, limit, order })
    .then(response => (
      dispatch({
        type: constants.FETCH_MEMBER_MOVIES,
        payload: {
          memberId,
          movies: response.movies,
        },
      })
    ))
);

export default doFetchMemberMovies;