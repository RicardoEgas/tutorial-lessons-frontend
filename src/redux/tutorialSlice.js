import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customApi from '../utils/axios';
import { getToken } from '../utils/localStorage';

const token = getToken();

const getTutorials = createAsyncThunk(
  'tutorials/getTutorials',
  async (thunkAPI) => {
    try {
      const response = await customApi.get('/api/v1/tutorials');
      console.log(response.data);
      return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data.errors || 'Unknown error');
    }
  } 
 
);

const deleteTutorial = createAsyncThunk(
  'tutorials/deleteTutorial',
  async (tutorial_id, thunkAPI) => {
    try {
      const response = await customApi.delete(`/api/v1/tutorials/${tutorial_id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert(response.data.message);
      return response.data.message;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert(error.response.data.message);
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      alert('Unknown error');
      return thunkAPI.rejectWithValue(error.response?.data.errors || 'Unknown error');
    }
  }
);

const tutorialSlice = createSlice({
  name: 'tutorials',
  initialState: {
    tutorials: [],
    message: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    addTutorial: (state, action) => {
      state.tutorials.push(action.payload);
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    delConsole: (state, action) => {
      state.tutorials = state.tutorials.filter((tutorial) => tutorial.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTutorials.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTutorials.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.tutorials = action.payload.data;
        // console.log('Tutorials from API:', action.payload.data);
        state.tutorials = action.payload.tutorials;
        console.log('Tutorials from API:', action.payload.tutorials);
      })
      .addCase(getTutorials.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteTutorial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTutorial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteTutorial.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addTutorial, setMessage, delTutorial } = tutorialSlice.actions;
export default tutorialSlice.reducer;
export { getTutorials, deleteTutorial };
