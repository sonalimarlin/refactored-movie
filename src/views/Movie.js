import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getAllMovies } from '../redux/actions';
import './movieStyles.scss';

const Movie = (props) => {
    return (
        <div className="movieBox">
            <div className="posterBox">
                <img 
                    src={props.movie.poster}
                    alt="movie poster"
                    height="200px"
                    position = "absolute"
                    top="0"
                    bottom="0"
                    margin="auto"
                />
            </div>
            <div className="movieTitle">
            <Link to={`/movie/${props.movie.imdbId}`}>{props.movie.title}</Link>
            </div>
        </div>
     );
}
 
export default Movie;
