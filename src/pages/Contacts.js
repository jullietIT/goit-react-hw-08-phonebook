import { ContactForm } from '../components/Fonebook/ContactForm/ContactForm';
import ContactList from '../components/Fonebook/ContactList/ContactList';
import Filter from '../components/Fonebook/Filter/Filter';

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
