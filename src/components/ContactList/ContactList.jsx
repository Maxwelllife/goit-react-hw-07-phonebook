import PropTypes from 'prop-types';
import s from './ContactList.module.css';
function ContactList(props) {
  const { contacts, onDeleteContact } = props;
  // console.log('props: ', props);
  // console.log('contacts2: ', contacts);

  return (
    <ul>
      {contacts.map(({ name, phone, id }) => (
        <li className={s.item} key={id}>
          <p>
            {name}: {phone}
          </p>
          <button
            className={s.button}
            onClick={() => onDeleteContact(id)}
            type="button"
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
