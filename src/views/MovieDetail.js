import React, { Fragment, Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovie } from '../redux/actions';
import './movieDetailStyles.scss';

class MovieDetail extends Component {

    state = {
        rating: {},
        redirect: false
    };

    componentDidMount() {
        const { match: { params: { imdbId } }, getMovie } = this.props;
        getMovie(imdbId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.movie.Ratings !== prevProps.movie.Ratings) {
          this.setState({ rating: this.props.movie.Ratings[0]})
        }
      }
    
      renderRedirect = () => {
        const {movie} = this.props;
        if (movie.Response === "False") {
          return <Redirect to={{pathname: "/error"}} />
        }
      }

    render() {
        const { movie } = this.props;
        const { rating } = this.state;
        const imageStyle = {
            padding: '10px',
            marginTop: '20px',
            flex: 1,
            height: 'auto',
            width: 'auto',
            maxHeight: '300px',
            maxWidth: '200px',
            backgroundImage: `url(${movie.Poster})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            border: '2px solid lightgrey',
        };

        return (
            <Fragment>
            <Link to="/">
                <input type="submit" id="custom-button" value="Back to Results"></input>
            </Link>

            {this.renderRedirect()}

            <div className="mainDetailContainer">
                <div style={imageStyle} />
                <div className="detailsContainer">
                    <h2 className="movieHeadings">{movie.Title} - ({movie.Year}) <span className="titleRight">Rating {rating.Value}</span></h2>
                    <div className="lightGraySubText">
                        Rated {movie.Rated} | Run Time {movie.Runtime} | Genre {movie.Genre} | Release Date {movie.Released}
                    </div>
                    <h4 className="movieHeadings">Plot</h4>
                    <p className="graySubText">{movie.Plot}</p>
                    <h4 className="movieHeadings">Directors</h4>
                    <p className="graySubText">{movie.Director}</p>
                    <h4 className="movieHeadings">Writers</h4>
                    <p className="graySubText">{movie.Writer}</p>
                    <h4 className="movieHeadings">Actors</h4>
                    <p className="graySubText">{movie.Actors}</p>
                    <h4 className="movieHeadings">IMDBID</h4>
                    <p className="graySubText">{movie.imdbID}</p>
                </div>
            </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    movie: state.selectedMovie.movie,
})
  
const mapDispatchToProps = dispatch => ({
    getMovie: (imdbId) => dispatch(getMovie(imdbId))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);