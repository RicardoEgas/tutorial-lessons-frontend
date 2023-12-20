import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import reservationsReducer from './reservations/reservationsSlice';
import tutorialReducer from './tutorialSlice';
import reserveConsoleReducer from './reservations/reserveTutorialSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationsReducer,
    reserveConsole: reserveConsoleReducer,
    tutorials: tutorialReducer,
  },
});

export default store;
