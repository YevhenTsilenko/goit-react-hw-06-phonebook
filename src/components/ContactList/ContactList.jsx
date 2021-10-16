import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function ContactList ({ contacts, onDelete }) {
    return (
        <ul >
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contact}>
            <span>
              {name}: {number}
            </span>
            <button
              className={styles.button}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
}

const getFilteredContacts = (allContacts, filter) => {
  const lowerCasedFilter = filter.toLocaleLowerCase().trim();
  return allContacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCasedFilter))
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter)
});

const mapDispatchToProps = dispatch => ({
      onDelete: id => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);