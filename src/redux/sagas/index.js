import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

import { commitsSaga } from './commitsSaga'








export function* watchCommitsSaga() {
  yield takeEvery('ADD_COMMITS', commitsSaga)
}
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(watchCommitsSaga),
  ])
}
