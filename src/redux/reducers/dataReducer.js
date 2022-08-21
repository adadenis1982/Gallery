import {
  GET_PAINTINGS,
  GET_LOCATIONS,
  GET_AUTHORS,
  START_LOADING,
  END_LOADING,
} from '../actionTypes/dataAT';

export const dataReducer = (
  state = { isLoading: true, paintigs: [], authors: [], locations: [] },
  action
) => {
  switch (action.type) {
    case GET_PAINTINGS:
      return { ...state, paintigs: action.payload };
    case GET_AUTHORS:
      return { ...state, authors: action.payload };
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload.map((el) => {
          el.name = el.location;
          delete el.location;
          return el;
        }),
      };
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
