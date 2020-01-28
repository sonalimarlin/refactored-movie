import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../redux/actions';
import './homeStyles.scss';
import Movie from './Movie';


class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies()
  }

  render() {
    return (
      <div className="container">
      <Fragment><h3 className="containerTitle">All Movies</h3></Fragment>
      <Fragment>
        {this.props.movies.map(movie => (
            <Movie key={movie.imdbId} movie={movie} />
        ))}
      </Fragment>
          
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.main.movies,
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
