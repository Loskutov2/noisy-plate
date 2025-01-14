import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface Item {
  id: number;
  title: string;
  thumbnail: string;
}

interface SearchState {
  items: Item[] | 'pending';
  loading: boolean;
  error: string | null;
}


const initialState:SearchState = {
  items: [],
  loading: false,
  error: null,
};


export const searchByQuery = createAsyncThunk<Item[], {q:string, albumToggle:boolean}>(
  'search/searchByQuery',
  async ({q, albumToggle}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/.netlify/functions/search`, {params: {q, albumToggle}});
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
      .addCase(searchByQuery.pending, (state) => {
        state.items = 'pending';
        state.error = null;
      })
      .addCase(searchByQuery.fulfilled, (state, action) => {
        console.log(action.payload)
        state.items = action.payload;
      })
      .addCase(searchByQuery.rejected, (state, action) => {
        state.items = [];
        state.error = action.payload as string;
      })
  },
});

export default searchSlice.reducer;
