import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://63e7879dbb2862797713924c.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, {rejectWithValue}) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data; 
        } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk('contacts/addContact',
  async (subscriber, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/contacts`, subscriber);
      return response.data;
            
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);