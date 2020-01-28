import { combineReducers } from 'redux';
import main from './reducers';
import movieDetailReducer from './movieDetailReducer';
import filteredMovieReducer from './filteredMovieReducer';

export default combineReducers({
  main,
  selectedMovie: movieDetailReducer,
  filteredMovies: filteredMovieReducer
});
