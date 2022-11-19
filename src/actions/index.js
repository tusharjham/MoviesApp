export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SHOW_FAVOURITE = "SHOW_FAVOURITE";
export const SEARCH_RESULT = "SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const CLOSE_SEARCH_BAR = "CLOSE_SEARCH_BAR";

export function addMovies(data) {
  return {
    type: ADD_MOVIES,
    movies: data,
  };
}
export function addFavourite(data) {
  return {
    type: ADD_FAVOURITE,
    fav: data,
  };
}
export function removeFav(data) {
  return {
    type: REMOVE_FAVOURITE,
    movie: data,
  };
}
export function showFavourites(data) {
  return {
    type: SHOW_FAVOURITE,
    val: data,
  };
}
export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
  return function (dipsatch) {
    fetch(url)
      .then((response) => response.json())
      //Now we have to dispatch
      .then((data) => dipsatch(addSearchResult(data)));
  };
}
export function addSearchResult(movie) {
  return {
    type: SEARCH_RESULT,
    movie: movie,
  };
}

export function addMovieToList(result) {
  return {
    type: ADD_MOVIE_TO_LIST,
    result: result,
  };
}
export function closeSearchBar(result) {
  return {
    type: CLOSE_SEARCH_BAR,
    result: result,
  };
}
