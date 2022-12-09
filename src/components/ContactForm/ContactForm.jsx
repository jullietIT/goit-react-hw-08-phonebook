import { useState } from 'react';
import css from './ContactForm.module.css';
import { getContacts } from '../../redux/contacts/selectors';
// Импортируем хук
import { useDispatch, useSelector } from 'react-redux';
// Импортируем генератор экшена
//
import { addContacts } from '../../redux/contacts/operations';

export const ContactForm = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const contacts = useSelector(getContacts);
  const handleSubmit = event => {
    event.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContacts({ name, number }));
    }
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>

      <div className={css.wrapper}>
        <form onSubmit={handleSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="create new name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя должно состоять из букв, заглавных"
              required
            />
          </label>
          <label className={css.label}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={number}
              placeholder="new number"
              onChange={handleChange}
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            />
          </label>

          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
};
