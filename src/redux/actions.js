import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetch/request');
export const fetchContactsSuccess = createAction('contacts/fetch/success');
export const fetchContactsError = createAction('contacts/fetch/error');

export const addContactRequest = createAction('contacts/add/request');
export const addContactSuccess = createAction('contacts/add/success');
export const addContactError = createAction('contacts/add/error');

export const removeContactRequest = createAction('contacts/remove/request');
export const removeContactSuccess = createAction('contacts/remove/success');
export const removeContactError = createAction('contacts/remove/error');

export const filterContact = createAction('contacts/filter');
