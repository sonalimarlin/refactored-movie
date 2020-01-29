import React, {Fragment} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './errorStyles.scss';

const Error = () =>  {
    const dispatch = useDispatch()
    return (
    <Fragment>
    <Link to="/">
        <input onClick={() => dispatch({type: 'REMOVE_SELECTED_MOVIE', payload: {movie: {}}})} type="submit" id="custom-button" value="Back to Results"></input>
    </Link>
    <div className="errorContainer">
        <h3 className="errorTitle">Oops, something went wrong!</h3>
        <SvgWithXlink />
    </div>
    </Fragment>
    );
};

function SvgWithXlink () {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="400"
            height="400"
            viewBox="0 0 200 200">
        <defs>
            <path id="exclamation-a" d="M162.9,100 C162.9,65.3 134.8,37.1 100,37.1 C65.2,37.1 37.1,65.3 37.1,100 C37.1,134.7 65.2,162.9 100,162.9 C134.8,162.9 162.9,134.7 162.9,100 Z M25,100 C25,58.6 58.6,25 100,25 C141.4,25 175,58.6 175,100 C175,141.4 141.4,175 100,175 C58.6,175 25,141.4 25,100 Z M100,121.7 C95.6,121.7 92.1,118.1 92.1,113.8 L92.1,63.4 C92.1,59 95.7,55.5 100,55.5 C104.3,55.5 107.9,59.1 107.9,63.4 L107.9,113.8 C107.9,118.2 104.4,121.7 100,121.7 Z M100,144.5 C95.1,144.5 91.1,140.5 91.1,135.6 C91.1,130.7 95.1,126.7 100,126.7 C104.9,126.7 108.9,130.7 108.9,135.6 C108.9,140.6 104.9,144.5 100,144.5 Z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
            <rect width="200" height="200"/>
            <use fill="#CACBCC" fillRule="nonzero" xlinkHref="#exclamation-a"/>
        </g>
        </svg>
    );
}

 
export default Error;