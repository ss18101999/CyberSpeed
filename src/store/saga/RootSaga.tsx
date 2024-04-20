import { all } from "redux-saga/effects";
import handleCounterResponseWatcher from "./CountSaga";
import handleMoviesResponseWatcher from "./MovieSaga";

export default function* rootSaga(){
    yield all(
        [
            handleCounterResponseWatcher(),
            handleMoviesResponseWatcher(),
        ]
    );
}