import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactsList from './ContactsList/ContactsList';
import Section from './Section/Section';
import InputSearch from './InputSearch/InputSearch';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import {
  getAddContact,
  getDeleteContact,
  getFindByName,
} from 'redux/contactsSlice';
export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onInputContact = user => {
    if (contacts.some(contact => contact.name === user.name)) {
      return alert(`${user.name} is already in contacts.`);
    }
    dispatch(getAddContact(user));
  };

  const findByName = value => {
    const name = value.trim().toLocaleLowerCase();
    dispatch(getFindByName(name));
  };

  const onClickDelete = id => {
    dispatch(getDeleteContact(id));
  };
  return (
    <div>
      <Section title="PhoneBook">
        <PhoneBookForm onInputContact={onInputContact} />
      </Section>

      <Section title="Contacts">
        <InputSearch
          nameSearch="Find contacts by name"
          onSearchName={findByName}
        />
        <ContactsList
          onClickDelete={onClickDelete}
          contacts={filter === '' ? contacts : filter}
        />
      </Section>
    </div>
  );
};
