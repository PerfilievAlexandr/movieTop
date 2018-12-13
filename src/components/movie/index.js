import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {selectedMovies} from '../../selectors'

class Movie extends Component {
    render() {
        const { movie } = this.props    
        return (
            <div>
                {movie.title}
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