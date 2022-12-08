import ContactForm from '../components/ContactList/ContactList';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

import { Wrapper } from '../components/App.styled';

export default function Contacts() {
  return (
    <>
      <Wrapper>
        <ContactForm />
        <Filter />
        <ContactList />
      </Wrapper>
    </>
  );
}
