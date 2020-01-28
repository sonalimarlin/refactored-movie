import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../redux/actions';
// import { Link } from 'react-router-dom';
// import { getAllMovies } from '../redux/actions';
// import './movieStyles.scss';

class MovieDetail extends Component {
    state = { };

    componentDidMount() {
        console.log(this.props);
        this.getMovieDetails();
    }

    getMovieDetails = () => {
        const { match: { params: { imdbId } }, getMovie } = this.props;
        getMovie(imdbId);
    }

    render() {
        const { movie } = this.props;
        console.log(movie.Title);
        return ( 
            <div>{movie.Title}</div>
        );
    }
}

const mapStateToProps = state => ({
    movie: state.main.movie,
})
  
const mapDispatchToProps = dispatch => ({
    getMovie: (imdbId) => dispatch(getMovie(imdbId))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);