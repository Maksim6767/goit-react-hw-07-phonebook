import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      const index = state.items.findIndex(task => task.id === action.payload.id);
      state.items.splice(index, 1);
      state.isLoading = false;
      state.error = null;

    },
    [deleteContact.rejected]: handleRejected,
    
    [addContact.pending]: handlePending,

    [addContact.fulfilled](state, action) {
      state.items.unshift(action.payload)
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: handleRejected,
    
  }
}
)
export const contactsReduser = contactSlice.reducer;