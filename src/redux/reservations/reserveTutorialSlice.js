// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getToken } from "../../utils/localStorage";
// import customApi from "../../utils/axios";

// const createReservation = createAsyncThunk(
//   "reserveTutorial/createReservation",
//   // async (reservation, thunkAPI) => {
//     async (tutorialId, thunkAPI) => {
//     // const token = getToken();
//     try {
//       const token = getToken();
//       if (!token) {
//         return thunkAPI.rejectWithValue('No authentication token found');
//       }
//       // const response = await customApi.post(
//         // "/api/v1/user_reservations",
//         const response = await customApi.post(
//           `/api/v1/tutorials/${tutorialId}/reservations`,
//         { reservation: reservation },
//         {
//           headers: token
//         }
//       );

//       const data = await response.data;
//       if (response.status === 201) {
//         alert('Reservation created');
//         return data;
//       }
//     } catch (error) {
//       if (
//         error.response &&
//         (error.response.status === 401 || error.response.status === 422)
//       ) {
//         return thunkAPI.rejectWithValue(error.response.data.errors[0]);
//       }
//       return thunkAPI.rejectWithValue(
//         error.response?.data.errors || "Unknown error"
//       );
//     }
//   }
// );

// const deleteReservation = createAsyncThunk(
//   "reserveTutorial/deleteReservation",
//   async (reservation_id, thunkAPI) => {
//     try {
//       const response = await customApi.delete(
//         `/api/v1/user_reservations/${reservation_id}`
//       );
//       const data = await response.data;
//       if (response.status === 200) {
//         alert('Reservation deleted');
//         return data;
//       }
//     } catch (error) {
//       if (
//         error.response &&
//         (error.response.status === 401 || error.response.status === 422)
//       ) {
//         return thunkAPI.rejectWithValue(error.response.data.errors[0]);
//       }
//       return thunkAPI.rejectWithValue(
//         error.response?.data.errors || "Unknown error"
//       );
//     }
//   }
// );


// const initialState = {
//   isLoading: false,
//   error: null,
//   reserved: false,
//   reservation: null
// };

// const reserveTutorialSlice = createSlice({
//   name: "reserveTutorial",
//   initialState,
//   reducers: {
//     deleteRes: (state, action) => {
//       state.tutorials.push(action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createReservation.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(createReservation.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.reserved = true;
//         state.reservation = action.payload;
//       })
//       .addCase(createReservation.rejected, (state, action) => {
//         state.isLoading = false;
//         state.reserved = false;
//         state.error = action.payload;
//       })

//       .addCase(deleteReservation.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteReservation.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.reserved = true;
//         state.reservation = action.payload;
//       })
//       .addCase(deleteReservation.rejected, (state, action) => {
//         state.isLoading = false;
//         state.reserved = false;
//         state.error = action.payload;
//       });
//   }
// });

// export { createReservation, deleteReservation };
// export default reserveTutorialSlice.reducer;
// export const { deleteRes } = reserveTutorialSlice.actions;
