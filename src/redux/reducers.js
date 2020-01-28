const initialState = {
  movies: [],
  movie: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_MOVIES_LOADED':
    return {
      movies: action.payload.movies,
    }
    case 'GET_MOVIE_DETAIL':
    return {
      movie: action.payload.movie,
    }
    default:
    return state
  }
}
