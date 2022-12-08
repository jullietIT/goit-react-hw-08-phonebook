// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // GET @ /tasks
// export const fetchContacts = createAsyncThunk(
//   'tasks/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/tasks');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // POST @ /tasks
// export const addContacts = createAsyncThunk(
//   'tasks/addTask',
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.post('/tasks', { text });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// // DELETE @ /tasks/:id
// export const deleteContacts = createAsyncThunk(
//   'tasks/deleteTask',
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/tasks/${taskId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const errorMessage = `Sorry! Something went wrong. Please refresh this page and try again.`;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(`errorMessage`);
    }
  }
);
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
