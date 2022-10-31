import PropTypes from 'prop-types';

import { ButtonDelete, List, ListItem, ContactText } from './ContactList.styled';

const ContactsList = ({ contacts, onClickDelete }) => {
  console.log(contacts);
  if (contacts.length===0) {
    return <p>No any data</p>;
  }
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
              <ContactText>{contact.name}: {contact.number}</ContactText>
          <ButtonDelete  onClick={() => onClickDelete(contact.id)}>
            Delete
          </ButtonDelete>
        </ListItem>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),

  onClickDelete: PropTypes.func.isRequired,
};

export default ContactsList;
