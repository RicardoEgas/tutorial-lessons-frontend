import customApi from '../utils/axios';

export const addTutorial = (tutorialData) => {
  return async (dispatch) => {
    try {
      const response = await customApi.post('/api/v1/tutorials', { tutorial: tutorialData });
      dispatch({
        type: 'ADD_TUTORIAL_SUCCESS',
        payload: {
          data: response.data.data,
          message: 'Tutorial added successfully.',
        },
      });
      alert('Tutorial added successfully.')
    } catch (error) {
      const errorMessage = 'Error adding tutorial: ' + error.message;

      dispatch({
        type: 'ADD_TUTORIAL_ERROR',
        payload: {
          data: null,
          message: errorMessage,
        },
      });
      alert(errorMessage)
      // tutorial.error(errorMessage);
    }
  };
};
