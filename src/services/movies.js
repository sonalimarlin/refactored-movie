
const MoviesService = {
  getAllMovies: () => fetch('http://localhost:3001/movies/all')
      .then(function(response) {
        return response.json();
      }),
  getMovie: (imdbId) => fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=c32d368e`)
  .then(function(response) {
    return response.json();
  }),
  getFilteredMovies: (q) => fetch(`http://localhost:3001/movies/search?s=${q}`)
    .then(function(response) {
      return response.json();
    })
}

export default MoviesService;
