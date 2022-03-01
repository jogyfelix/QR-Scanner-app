import {all} from 'redux-saga/effects';
import {getDataSaga} from './getDataSaga';

export function* rootSaga() {
  yield all([...getDataSaga]);
}
