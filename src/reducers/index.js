import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SHOW_FAVOURITE,
  SEARCH_RESULT,
  ADD_MOVIE_TO_LIST,
  CLOSE_SEARCH_BAR,
} from "../actions";

const initialMovieState = {
  movies: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return { ...state, movies: action.movies };
    case ADD_FAVOURITE:
      return { ...state, favourites: [action.fav, ...state.favourites] };
    case REMOVE_FAVOURITE:
      // console.log(action.movie)
      const filtered = state.favourites.filter(
        (movie) => movie.Title != action.movie.Title
      );
      return { ...state, favourites: filtered };
    case SHOW_FAVOURITE:
      return {
        ...state,
        showFavourites: action.val,
      };
    case ADD_MOVIE_TO_LIST:
      return { ...state, movies: [action.result, ...state.movies] };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
  showSearchResult: false,
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case SEARCH_RESULT:
      return { ...state, result: action.movie, showSearchResult: true };
    case ADD_MOVIE_TO_LIST:
      return { ...state, showSearchResult: false };
    case CLOSE_SEARCH_BAR:
      return { result: {}, showSearchResult: false };
    default:
      return state;
  }
}

// const initialRootState = {
//   movieData: initialMovieState,
//   searchData: initialSearchState,
// };
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movieData: movies(state.movieData, action),
//     searchData: search(state.searchData, action),
//   };
// }

export default combineReducers({
  movieData: movies,
  searchData: search,
});
