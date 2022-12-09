import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, fetchContacts } from '../../redux/contacts/operations';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/contacts/selectors.js';
import { useEffect } from 'react';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filters.toLowerCase())
  );
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.ul}>
      {isLoading && !error && <p>Request in progress...</p>}
      {error && <p></p>}
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className={css.button}
            type="button"
            onClick={() => dispatch(deleteContacts(id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
