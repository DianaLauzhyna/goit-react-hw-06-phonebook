import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState() {
    const contact = localStorage.getItem('contacts');
    try {
      if (contact) {
        const parsedContacts = JSON.parse(contact);
        return parsedContacts;
      }
      return {
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
      };
    } catch (error) {
      console.log(error);
    }
  },
  reducers: {
    getDeleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    getAddContact: {
      reducer(state, action) {
        return { ...state, contacts: [...state.contacts, action.payload] };
      },
      prepare(user) {
        return {
          payload: {
            ...user,
            id: nanoid(),
          },
        };
      },
    },
    getFindByName(state, action) {
      if (!action.payload) {
        state.filter = '';
      } else {
        state.filter = state.contacts.filter(contact =>
          contact.name.toLocaleLowerCase().includes(action.payload)
        );
      }
    },
  },
});

export const {
  getAddContact,
  getFindByName,
  getDeleteContact,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, contactsReducer);
