import {
  GET_CURRENT_LOCATION,
} from './types';

export const getCurrentLocation = () => (dispatch) => (
  navigator.geolocation.getCurrentPosition((position) => (
    dispatch({
      type: GET_CURRENT_LOCATION,
      payload: position.coords,
    })
  ))
);
