import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6315f44f33e540a6d3890024.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');

  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  console.log(' result: ', result);

  return result;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
