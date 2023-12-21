import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import authReducer from './authStore/authSlice';
import reservationReducer from './reservationStore/reservationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    reservation: reservationReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;