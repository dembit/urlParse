import { all, put, takeEvery, call } from "redux-saga/effects";
import { Api } from "../../API/API";
import { ActionType, SendMetaType } from "../../Types/Tipes";
import { getResult } from "../reducers/bitcoinReducer";

function* sendMeta(params: SendMetaType) {
  let {payload} = params
  try {
     const result: {data: string} = yield call(Api.setMeta, payload)
     yield put({type: getResult.type, payload: result.data}) 
  } catch (e) {}
}

function* todoSaga() {
  yield all([takeEvery(ActionType.SEND_META, sendMeta)]);
}

export default todoSaga;
