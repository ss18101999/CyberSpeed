import { CONSTANT } from "../Constant";

interface Movie {
    title: string;
    year: string;
    poster: string;
    type: string;
  }

const GetMoviesAction = (movieName :String)=>{
    return({
        type:CONSTANT.GetMoviesAction,
        movieName
    })
}

const GetMoviesActionSuccess = (movies:Movie[])=>{
    return({
        type:CONSTANT.GetMoviesActionSuccess,
        movies
    })
}

export {GetMoviesAction,GetMoviesActionSuccess}