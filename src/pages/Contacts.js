import { ContactForm } from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <>
      <div className={css.Wrapper}>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
