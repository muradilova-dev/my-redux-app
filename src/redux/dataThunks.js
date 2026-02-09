import mockData from '../data/mockData.json';

export const fetchMockData = () => async (dispatch) => {
  dispatch({ type: 'FETCH_DATA_REQUEST' });

  try {
    // Задержка 1.52.5 секунды
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    dispatch({
      type: 'FETCH_DATA_SUCCESS',
      payload: mockData
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_DATA_FAILURE',
      payload: error.message
    });
  }
};
