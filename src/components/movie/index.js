import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectedMovies } from '../../selectors'
import './style.css'

class Movie extends Component {
    render() {
        const { movie } = this.props
        return (
            <div
                className="movieList--item"
            >
                <h3>{movie.title}</h3>
            </div>
        )
    }
}

Movie.propTypes = {
    movies: PropTypes.string
}

export default connect((state, ownProps) => ({
    movie: selectedMovies(state, ownProps)
}))(Movie)