import { createAction } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const getDeleteContact = createAction('contacts/getDeleteContact');
export const getAddContact = createAction('contacts/getAddContact', user => {
  return {
    payload: {
      ...user,
      id: nanoid(),
    },
  };
});
export const getFindByName = createAction('contacts/getFindByName');
