import BetaSeries from '../../../betaseries';

/**
 * Retrieve user from state
 */
export const getUser = () => BetaSeries.user.userId;

/**
 * Retrieve member from state
 */
export const getMembers = state => state.members;

/**
 * Retrieve member ID from parameters
 */
export const getMemberId = (state, { memberId }) => parseInt(memberId, 10);
