import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken } from "../../utils/localStorage";
import customApi from "../../utils/axios";
// console.log('token: ', token);

const createReservation = createAsyncThunk(
  "reserveTutorial/createReservation",
    async (newReservation, thunkAPI) => {
    try {
      const token = getToken();
      const tutorialId = newReservation.tutorialId;
      const reserveDate = newReservation.reserveDate;
      console.log('token', token);
      console.log('tutorial id: ', tutorialId);
      console.log('formatted date: ', reserveDate);
      if (!token) {
        return thunkAPI.rejectWithValue('No authentication token found');
      }
      const response = await customApi.post(
        `/api/v1/tutorials/${tutorialId}/reservations`,
        {
          reservation: {
            reserve_date: reserveDate
          }
        },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.data;
      if (response.status === 201) {
        alert('Reservation created');
        console.log('data', data);
        return data;
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 422)
      ) {
        return thunkAPI.rejectWithValue(error.response.data.errors[0]);
      }
      return thunkAPI.rejectWithValue(
        error.response?.data.errors || "Unknown error"
      );
    }
  }
);

const deleteReservation = createAsyncThunk(
  "reserveTutorial/deleteReservation",
  async (bothId, thunkAPI) => {
    const token = getToken();
    const tutorialId = bothId.tutorialId;
    const reservationId = bothId.reservationId;
    try {
      const response = await customApi.delete(
        `/api/v1/tutorials/${tutorialId}/reservations/${reservationId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      const data = await response.data;
      if (response.status === 200) {
        alert('Reservation deleted');
        return data;
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 422)
      ) {
        return thunkAPI.rejectWithValue(error.response.data.errors[0]);
      }
      return thunkAPI.rejectWithValue(
        error.response?.data.errors || "Unknown error"
      );
    }
  }
);


const initialState = {
  isLoading: false,
  error: null,
  reserved: false,
  reservation: null
};

const reserveTutorialSlice = createSlice({
  name: "reserveTutorial",
  initialState,
  reducers: {
    deleteRes: (state, action) => {
      state.tutorials.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reserved = true;
        state.reservation = action.payload;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.isLoading = false;
        state.reserved = false;
        state.error = action.payload;
      })

      .addCase(deleteReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reserved = true;
        state.reservation = action.payload;
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        state.isLoading = false;
        state.reserved = false;
        state.error = action.payload;
      });
  }
});

export { createReservation, deleteReservation };
export default reserveTutorialSlice.reducer;
export const { deleteRes } = reserveTutorialSlice.actions;
