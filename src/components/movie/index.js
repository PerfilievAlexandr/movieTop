import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectedMovies } from '../../selectors'
import './style.css'
import {OpenCloseMovie} from '../../ac'




class Movie extends Component {

    render() {
        
        const {movie} = this.props
      
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

    onChange = () => {
        const {OpenCloseMovie, clickedMovie, id} = this.props 
        OpenCloseMovie(id)
        clickedMovie(id)
    }
}

Movie.propTypes = {
    movie: PropTypes.object,
    id: PropTypes.string,
    open: PropTypes.bool
}

export default connect((state, ownProps) => ({
    movie: selectedMovies(state, ownProps), 
}), {OpenCloseMovie})(Movie)