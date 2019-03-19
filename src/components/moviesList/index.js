import React, {Component} from 'react';
import {connect} from 'react-redux';
import {foundMovies} from '../../selectors';
import PropTypes from 'prop-types';
import Movie from '../movie';
import './style.css';
import {toggleOpenMovie, moviesLoading, moviesLoaded} from '../../selectors';
import MovieModal from '../movieModal';
import {loadMovies} from '../../ac';
import Loader from '../loader'


class MoviesList extends Component {

    render() {
        const {movies, open, loading} = this.props;

        const movieModal =
            open ?
            <MovieModal/>
            :
            null;

        const moviesList = movies.map((movie) => (
            <li key={movie.id}>
                <Movie
                    id={movie.id}
                />
            </li>)
        );

        if (loading) return <Loader/>
        return (
            <div className='moviesList'>
                <div className='moviesList__wrapper'>
                    {movieModal}
                    {moviesList}
                </div>
            </div>
        )
    }

    componentDidMount() {
        const {moviesData, loaded} = this.props;
        if (!loaded) moviesData && moviesData();
    };
}

MoviesList.propTypes = {
    movies: PropTypes.array
};

export default connect((store) => ({
        movies: foundMovies(store),
        open: toggleOpenMovie(store),
        loading: moviesLoading(store),
        loaded: moviesLoaded(store)
    }),
    {moviesData: loadMovies}
)(MoviesList);