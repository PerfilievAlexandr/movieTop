import React, { Component } from 'react'
import { connect } from 'react-redux'
import { arrMoviesData } from '../../selectors'
import PropTypes from 'prop-types'
import Movie from '../movie'

class MoviesList extends Component {
    render() {
        const { movies } = this.props
        const moviesList = movies.map((movie) => (
            <li key={movie.id}>
                <Movie
                    id = {movie.id}
                />
            </li>)
        )
        return (
            <div>
                {moviesList}
            </div>
        )
    }
}

MoviesList.propTypes = {
    movies: PropTypes.array
}

export default connect((store) => ({
    movies: arrMoviesData(store)
})

)(MoviesList)