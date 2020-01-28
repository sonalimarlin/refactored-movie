import MoviesService from '../services/movies'

export const getAllMovies = () => dispatch => {
  MoviesService.getAllMovies()
      .then(movies => {
        dispatch({
          type: 'ALL_MOVIES_LOADED',
          payload: {
            movies,
          }
        })
      })
}

export const getMovie = (imdbId) => dispatch => {
  MoviesService.getMovie(imdbId)
      .then(movie => {
        dispatch({
          type: 'GET_MOVIE_DETAIL',
          payload: {
            movie,
          }
        })
      })
}
