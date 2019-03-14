import React, {Component} from 'react';
import {connect} from 'react-redux';
import {foundMovies} from '../../selectors';
import PropTypes from 'prop-types';
import Movie from '../movie';
import './style.css';
import {toggleOpenMovie} from '../../selectors';
import MovieModal from '../movieModal';
import {loadMovies} from '../../ac';


class MoviesList extends Component {

    render() {
        const {movies, open} = this.props

        const movieModal = open
            ?
            <MovieModal/>
            :
            null

        const moviesList = movies.map((movie) => (
            <li key={movie.id}>
                <Movie
                    id={movie.id}
                />
            </li>)
        )

        return (
            <div className='moviesList'>
                {movieModal}
                {moviesList}
            </div>
        )
    }

    componentDidMount() {
        const {moviesData} = this.props;
        moviesData && moviesData();
    };
}

MoviesList.propTypes = {
    movies: PropTypes.array
}

export default connect((store) => ({
        movies: foundMovies(store),
        open: toggleOpenMovie(store)
    }),
    {moviesData: loadMovies}
)(MoviesList)