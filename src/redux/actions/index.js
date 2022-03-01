import actiontypes from './actiontypes';

export const getData = url => {
  return {
    type: actiontypes.GET_DATA,
    url,
  };
};

export const setData = data => {
  return {
    type: actiontypes.SET_DATA,
    payload: data,
  };
};
