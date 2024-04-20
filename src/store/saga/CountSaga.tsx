import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from "../Constant";
import {CountActionSuccess} from "../actions/CountAction";

interface action{
    action: string;
}
function* handleCounterResponse() {
    console.log("Counter Saga is exeuting");
    try {
        yield put(CountActionSuccess());
    }
    catch (error) {
        console.log("Got an Error!!");
    }
}

export default function* handleCounterResponseWatcher() {
    yield takeEvery(CONSTANT.COUNT_ACTION, handleCounterResponse)
}