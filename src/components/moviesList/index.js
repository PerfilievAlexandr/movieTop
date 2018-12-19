import React, { Component } from 'react'
import { connect } from 'react-redux'
import { foundMovies } from '../../selectors'
import PropTypes from 'prop-types'
import Movie from '../movie'
import './style.css'
import { toggleOpenMovie } from '../../selectors'
import MovieModal from '../movieModal';

class MoviesList extends Component {

    state = {
        selectedMovieId: ''
    }

    render() {
        const { movies, open } = this.props

        const movieModal = open
            ?
                <MovieModal selectedMovieId={this.state.selectedMovieId}/>
            :
                null

        const moviesList = movies.map((movie) => (
            <li key={movie.id}>
                <Movie
                    id={movie.id}
                    clickedMovie={this.clickedMovie}
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

    clickedMovie = (id) => {
        this.setState({
            selectedMovieId: id
        })
    }
}

MoviesList.propTypes = {
    movies: PropTypes.array
}

export default connect((store) => ({
    movies: foundMovies(store),
    open: toggleOpenMovie(store)
})

)(MoviesList)