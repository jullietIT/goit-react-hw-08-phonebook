import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, fetchContacts } from '../../redux/operations';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/selectors';
import { useEffect } from 'react';
import { ListContact, Button } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';

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
    <ListContact>
      {/* {isLoading && !error && <p>Request in progress...</p>} */}
      {isLoading && <Loader />}
      {error && <p></p>}
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
            delete
          </Button>
        </li>
      ))}
    </ListContact>
  );
};

export default ContactList;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { ListContact, Button } from './ContactList.styled';
// import { getContacts, getFilter } from 'redux/selectors';

// const ContactList = () => {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();
//   const visibleContacts = contacts.filter(
//     contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
//   );
//   <ListContact>
//     {visibleContacts.map(({ contact }) => (
//       <li key={contact.id}>
//         {contact.name}: {contact.number}
//         {/* <Button type="button" onClick={() => onDeleteContact(id)}>
//           delete
//         </Button> */}
//       </li>
//     ))}
//   </ListContact>;
// };

// export default ContactList;
