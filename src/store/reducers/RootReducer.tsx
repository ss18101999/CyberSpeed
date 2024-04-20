import {combineReducers} from "redux";
import countReducer from "./countReducer";
import GetMoviesReducer from "./GetMoviesReducer";
const rootReducers = combineReducers({
    CountResponse : countReducer,
    MoviesResponse:GetMoviesReducer,
})

export default rootReducers;