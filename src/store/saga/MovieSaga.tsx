import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from "../Constant";
import {GetMoviesActionSuccess} from "../actions/GetMoviesAction";
import {fetchMovie} from "react-native-movies-sdk";

interface action{
    action: string;
    movieName: string;
}
const fetchMovies = async (searchQuery: String) => {
    if(searchQuery==""){
      var res = await fetchMovie("dino");
    }
    else{
      var res = await fetchMovie(searchQuery);
    }
    return res;
};

function* handleMoviesResponse(action:action) {
    console.log("Movies Saga is exeuting");
    console.log(action);
    try {
        const data = yield call(fetchMovies,action.movieName);
        yield put(GetMoviesActionSuccess(data));
    }
    catch (error) {
        console.log("Got an Error!!");
    }
}

export default function* handleMoviesResponseWatcher() {
    yield takeEvery(CONSTANT.GetMoviesAction, handleMoviesResponse)
}