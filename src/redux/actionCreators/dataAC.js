import { GET_PAINTINGS, GET_LOCATIONS, GET_AUTHORS, START_LOADING, END_LOADING } from '../actionTypes/dataAT';

import * as api from '../api/index';

export const getPaitings = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPaitings(searchQuery);

    dispatch({ type: GET_PAINTINGS, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocations = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchLocations();

    dispatch({ type: GET_LOCATIONS, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAuthors = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchAuthors();

    dispatch({ type: GET_AUTHORS, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};
