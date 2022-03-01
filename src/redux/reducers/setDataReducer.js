import actionTypes from '../actions/actiontypes';

const defaultState = {data: ''};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return action.payload;
    default:
      return state;
  }
};
