import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectedMovies } from '../../selectors'
import './style.css'
import MovieModal from '../movieModal';
import {toggleOpenMovie} from '../../ac'
import {toggleOpen} from '../../selectors'


class Movie extends Component {

    render() {
        const { movie, open, id } = this.props
        
        if (open) {
            return (
                <MovieModal 
                   id = {id}
                />
            )
        }
        
        return (
            <div>
                <div
                    className="movieList--item"
                    onClick = {this.onChange}
                >
                    <h3>{movie.title}</h3>

                </div>
            </div>
        )
    }

    onChange = (id) => {
        this.props.toggleOpenMovie(this.props.id)
    }
}

Movie.propTypes = {
    movies: PropTypes.string
}

export default connect((state, ownProps) => ({
    movie: selectedMovies(state, ownProps),
    open: toggleOpen(state) 
}), {toggleOpenMovie})(Movie)