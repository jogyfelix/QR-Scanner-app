import {call, put, takeLatest} from 'redux-saga/effects';
import {setData} from '../actions/index';
import {getDataApi} from '../../apis/index';
import actionTypes from '../actions/actiontypes';

export function* getDataOnline(payload) {
  try {
    const response = yield call(getDataApi, payload.url);
    const result = response.data;
    yield put(setData(result));
  } catch (error) {
    alert(error);
  }
}

export const getDataSaga = [takeLatest(actionTypes.GET_DATA, getDataOnline)];
