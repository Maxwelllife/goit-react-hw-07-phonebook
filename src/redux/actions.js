import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetch/request');
export const fetchContactsSuccess = createAction('contacts/fetch/success');
export const fetchContactsError = createAction('contacts/fetch/error');

export const addContactRequest = createAction('contacts/fetch/request');
export const addContactSuccess = createAction('contacts/fetch/success');
export const addContactError = createAction('contacts/fetch/error');

export const removeContactRequest = createAction('contacts/fetch/request');
export const removeContactSuccess = createAction('contacts/fetch/success');
export const removeContactError = createAction('contacts/fetch/error');

export const filterContact = createAction('contacts/filter');
