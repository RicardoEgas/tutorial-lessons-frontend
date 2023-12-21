import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customApi from '../../utils/axios';
import { getToken } from '../../utils/localStorage';

const fetchUserReservations = createAsyncThunk(
  'user/fetchUserReservations',
  async (_, thunkAPI) => {
    try {
      const token = getToken();
      if (!token) {
        return thunkAPI.rejectWithValue('No authentication token found');
      }

      const response = await customApi.get('/api/v1/user_reservations', 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      console.log(response);

      const reservations = response.data;
      console.log('reservations ', reservations);

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
      .addCase(fetchUserReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchUserReservations.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export { fetchUserReservations };
export default reservationsSlice.reducer;
