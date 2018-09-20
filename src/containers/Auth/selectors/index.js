import { createSelector } from 'reselect';
import { initialState } from '../reducers';

const selectEmail = state => state.get('email', initialState);

const makeSelectEmail = () =>
  createSelector(selectEmail, authState => authState.get('email'));

export { selectEmail, makeSelectEmail };
