import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import reservationsReducer from './reservations/reservationsSlice';
import tutorialReducer from './tutorialSlice';
import reserveTutorialReducer from './reservations/reserveTutorialSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationsReducer,
    reserveConsole: reserveTutorialReducer,
    tutorials: tutorialReducer,
  },
});

export default store;
