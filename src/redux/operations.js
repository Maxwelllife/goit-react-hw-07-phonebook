import * as api from 'api/contacts';

import * as actions from './actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    // сообщаем редюсеру, что запрос пошел
    dispatch(actions.fetchContactsRequest());
    try {
      const data = await api.getContacts();

      dispatch(actions.fetchContactsSuccess(data));
    } catch (error) {
      dispatch(actions.fetchContactsError(error));
    }
  };
  return func;
};

export const addContact = result => {
  const func = async (dispatch, getState) => {
    const { phonebook } = getState();
    const isDublicate = phonebook.contacts.find(
      contact => contact.name.toLowerCase() === result.name.toLowerCase()
    );
    if (isDublicate) {
      alert(`${result.name} is already in contacts`);
      return;
    } else if (result.name === '') {
      alert('Please enter your name');
      return;
    }
    dispatch(actions.fetchContactsRequest());
    try {
      const data = await api.addContact(result);
      dispatch(actions.addContactSuccess(data));
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
