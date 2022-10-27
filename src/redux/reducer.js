import { createReducer } from '@reduxjs/toolkit';
import { getAddContact, getDeleteContact, getFindByName } from './action';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsReducer = createReducer(initialState, {
  [getDeleteContact]: (state, action) => {
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    };
  },

  [getAddContact]: (state, action) => {
    return { ...state, contacts: [...state.contacts, action.payload] };
  },

  [getFindByName]: (state, action) => {
    //immer library
    if (!action.payload) {
      state.filter = '';
    }
    state.filter = state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(action.payload)
    );
    // without mutation
    // return {
    //   ...state,
    //   filter: '',
    // };
    // return {
    //   ...state,
    //   filter: state.contacts.filter(contact =>
    //     contact.name.toLocaleLowerCase().includes(action.payload)
    //   ),
    // };
  },
});
