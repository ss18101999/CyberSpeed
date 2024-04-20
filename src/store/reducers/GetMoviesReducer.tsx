import { CONSTANT } from "../Constant";
interface Movie {
    title: string;
    year: string;
    poster: string;
    type: string;
  }
interface action{
    type:string;
    movies:Movie[];
}
const GetMoviesReducer = (state={movies:{}},action:action)=>{
    if(action.type==CONSTANT.GetMoviesActionSuccess){
        return {...state,movies:action.movies};
    }
    else{
        return state;
    }
}

export default GetMoviesReducer;