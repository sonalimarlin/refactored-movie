import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import ImageComponent from '../components/ImageComponent';
import './movieStyles.scss';

const Movie = (props) => {

    const [hover, setHover] = useState(false);

    return (
        <div className="movieBox">
            <div className="posterBox">
                <ImageComponent poster={props.movie.poster}/>
            </div>
            <div className="movieTitle">
            <Link
                style={{textDecoration: 'none', color: hover ? '#99E7D0' : 'black'}}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                to={`/${props.movie.imdbId}`}
            >
                {props.movie.title}
            </Link>
            </div>
        </div>
     );
}
 
export default Movie;
