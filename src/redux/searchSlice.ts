import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface Item {
  id: number;
  title: string;
  thumbnail: string;
}

const initialState:Item[] = []


export const searchByQuery = createAsyncThunk<Item[], {q:string, albumToggle:boolean}>(
  'search/searchByQuery',
  async ({q, albumToggle}, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://noisyplate.netlify.app/.netlify/functions/aiSearch", {params: {q, albumToggle}});
      return response.data
    } catch (error) {
      return rejectWithValue('Failed to fetch items.');
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchByQuery.pending, state => [])
      .addCase(searchByQuery.fulfilled, (state, action) => action.payload)
      .addCase(searchByQuery.rejected, state => [])
  },
});

export default searchSlice.reducer;
