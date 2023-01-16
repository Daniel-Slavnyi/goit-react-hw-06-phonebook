import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },

  reducers: {
    makeNewUser(state, action) {
      if (
        state.items.some(
          item => item.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        return alert(`${action.payload.name} is already in contacts`);
      }

      state.items = [action.payload, ...state.items];
    },
    deleteUser(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
    },
  },
});

const { actions, reducer } = contactsSlice;

export const { makeNewUser, deleteUser } = actions;

export default reducer;
