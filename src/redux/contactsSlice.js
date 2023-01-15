import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    makeNewUser(state, action) {
      if (
        state.contacts.some(
          item => item.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        return alert(`${action.payload.name} is already in contacts`);
      }

      state.contacts = [action.payload, ...state.contacts];
    },
    deleteUser(state, action) {
      state.contacts = state.contacts.filter(obj => obj.id !== action.payload);
    },
    getFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const { actions, reducer } = contactsSlice;

export const { makeNewUser, deleteUser, getFilter } = actions;

export default reducer;
