import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customApi from '../../utils/axios';

const fetchUserReservations = createAsyncThunk(
  'user/fetchUserReservations',
  async (_, thunkAPI) => {
    try {
      // Assuming there is no token needed for this request
      const response = await customApi.get('/api/v1/reservations');

      const reservations = await Promise.all(
        response.data.map(async (reservation) => {
          const tutorialResponse = await customApi.get(
            `/api/v1/tutorials/${reservation.tutorial_id}`
          );

          const tutorialData = tutorialResponse.data;
          return {
            id: reservation.id,
            user_id: reservation.user_id,
            reserve_date: reservation.reserve_date,
            tutorial: tutorialData.data,
          };
        })
      );

      return reservations;
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 422)
      ) {
        return thunkAPI.rejectWithValue(error.response.data.errors[0]);
      }

      return thunkAPI.rejectWithValue(
        error.response?.data.errors || 'Unknown error'
      );
    }
  }
);

const initialState = {
  reservations: [],
  isLoading: false,
  error: null,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserReservations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserReservations.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.reservations = payload;
      })
      .addCase(fetchUserReservations.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export { fetchUserReservations };
export default reservationsSlice.reducer;
