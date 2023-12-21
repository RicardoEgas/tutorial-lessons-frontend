// reservationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: '',
  city: '',
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    setReservationDate: (state, action) => {
      state.date = action.payload;
    },
    setReservationCity: (state, action) => {
      state.city = action.payload;
    },
    setReservationError: (state, action) => {
      state.error = action.payload;
    },
    resetReservation: (state) => {
      state.date = '';
      state.city = '';
      state.error = null;
    },
  },
});

export const {
  setReservationDate,
  setReservationCity,
  setReservationError,
  resetReservation,
} = reservationSlice.actions;

export default reservationSlice.reducer;
