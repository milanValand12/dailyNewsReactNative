import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  news: [],
  loading: true,
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetchNews: state => {
      state.error = null;
      state.loading = true;
      state.news = [];
    },
    fetchNewsSuccess: (state, action) => {
      state.error = null;
      state.loading = false;
      state.news = action.payload;
    },
    fetchNewsReject: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {fetchNews, fetchNewsSuccess, fetchNewsReject} = newsSlice.actions;

export default newsSlice.reducer;
