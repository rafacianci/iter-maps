import {
  GET_CURRENT_LOCATION,
} from '../actions/types';

const initialState = {
  myLocation: {
    lat: 59.955413,
    lng: 30.337844,
  },
};

export default (state = initialState, action) => {
  if (action.type === GET_CURRENT_LOCATION) {
    return {
      ...state,
      myLocation: {
        lat: action.payload.latitude,
        lng: action.payload.longitude,
      },
    };
  }

  return state;
};
