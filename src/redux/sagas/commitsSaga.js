import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

import { getCommits } from '../api/commits'

export function* commitsSaga() {

  try {
    const commitData  = yield call(getCommits)
    yield put({ type: "ADD_COMMITS_DONE", data:commitData })
  }
  catch (e) {
    yield put({ type: "ADD_COMMITS_ERROR", error:e })
   }

}
