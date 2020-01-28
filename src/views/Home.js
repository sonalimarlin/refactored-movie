import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies, getFilteredMovies } from '../redux/actions';
import './homeStyles.scss';
import Movie from './Movie';
import * as QueryString from "query-string"

class Home extends Component {

  componentDidMount() {
    this.props.getAllMovies()
  }

  componentDidUpdate(prevProps) {
    const params = QueryString.parse(this.props.location.search);
    console.log(this.props.location.search, prevProps.location.search);
    if (this.props.location.search !== prevProps.location.search) {
      this.props.getFilteredMovies(params.q);
    }
  }

  render() {
    const params = QueryString.parse(this.props.location.search);
    console.log(this.props);
    return (
      <div className="mainContainer">
      {
        params.q !== undefined ?
          (
          <Fragment><h3 className="containerTitle">All Movies</h3>
          {this.props.filteredMovies.filteredMovies.map(movie => (
              <Movie key={movie.imdbId} movie={movie} />
          ))}
        </Fragment>) 
          : 
          (
          <Fragment><h3 className="containerTitle">All Movies</h3>
            {this.props.movies.map(movie => (
                <Movie key={movie.imdbId} movie={movie} />
            ))}
          </Fragment>
          )
      }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.main.movies,
  filteredMovies: state.filteredMovies
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies()),
  getFilteredMovies: (q) => dispatch(getFilteredMovies(q))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
