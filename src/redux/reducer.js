import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';

const itemsReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (_, action) => {
    return action.payload;
  },

  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],

  [actions.removeContactSuccess]: (state, { payload }) => {
    return state.filter(item => item.id !== payload);
  },
});
const loadingReducer = createReducer(false, {
  [actions.fetchContactsRequest]: () => {
    return true;
  },
  [actions.fetchContactsSuccess]: () => {
    return false;
  },
  [actions.fetchContactsError]: () => false,

  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,

  [actions.removeContactError]: () => true,
  [actions.removeContactSuccess]: () => false,
  [actions.removeContactError]: () => false,
});
const errorReducer = createReducer(null, {
  [actions.fetchContactsRequest]: () => null,
  [actions.fetchContactsError]: (_, { payload }) => payload,

  [actions.addContactRequest]: () => null,
  [actions.addContactError]: (_, { payload }) => payload,

  [actions.removeContactRequest]: () => null,
  [actions.removeContactError]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload.toLowerCase().trim(),
});

const contactsReducers = combineReducers({
  contacts: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
});

export default contactsReducers;
