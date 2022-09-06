import * as api from 'api/contacts';

import * as actions from './actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    // сообщаем редюсеру, что запрос пошел
    dispatch(actions.fetchContactsRequest());
    try {
      const data = await api.getContacts();
      console.log('dataOperations: ', data);
      dispatch(actions.fetchContactsSuccess(data));
    } catch (error) {
      dispatch(actions.fetchContactsError(error));
    }
  };
  return func;
};

export const addContact = data => {
  const func = async dispatch => {
    dispatch(actions.addContactRequest());
    try {
      const result = await api.addContact(data);
      dispatch(actions.addContactSuccess(result));
    } catch (error) {
      dispatch(actions.addContactError(error));
    }
  };
  return func;
};

export const removeContact = id => {
  const func = async dispatch => {
    dispatch(actions.removeContactRequest());
    try {
      const data = await api.removeContact(id);
      dispatch(actions.removeContactSuccess(data.id));
    } catch (error) {
      dispatch(actions.removeContactError(error));
    }
  };
  return func;
};
