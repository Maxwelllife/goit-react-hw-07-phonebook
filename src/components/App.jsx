import 'modern-normalize/modern-normalize.css';
import s from './app.module.css';
import { useEffect } from 'react';
import SectionTitle from './Section/SectionTitle';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, removeContact, addContact } from 'redux/operations';
import { filterContact } from '../redux/actions.js';

const App = () => {
  const { contacts, filter, loading } = useSelector(store => {
    return store.phonebook;
  });

  const filterValue = filter;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = data => {
    console.log('dataAPP: ', data);

    return dispatch(addContact(data));
  };

  const onRemoveContact = id => dispatch(removeContact(id));

  const onfilterContact = e => dispatch(filterContact(e.target.value));

  const getVisibleContacts = () => {
    console.log('contacts: ', contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  return (
    <div className={s.wrap}>
      <SectionTitle title="Phonebook">
        {loading && <p>...Loading</p>}
        <ContactsForm catchSubmitInfo={onAddContact} />
      </SectionTitle>
      <SectionTitle title="Contacts">
        <Filter filterValue={filterValue} onFilter={onfilterContact} />
        {contacts.length ? (
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={onRemoveContact}
          />
        ) : (
          <p>Your phonebook is empty</p>
        )}
      </SectionTitle>
    </div>
  );
};
export default App;
