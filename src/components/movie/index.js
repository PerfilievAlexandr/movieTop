import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {selectedMovies} from '../../selectors'
import './style.css'
import {OpenCloseMovie} from '../../ac'


class Movie extends Component {
	render() {
		const {movie} = this.props

		return (
			<div
				className="movieList__item"
				onClick={this.onChange}
			>
				<div
					className='movieList__item-picture'
				>
					<img src={movie.picture} alt="баннер" width='100%' height='100%'/>
				</div>
				<h3 className='movieList__item-title'>{movie.title}</h3>
			</div>
		)
	}

	onChange = () => {
		const {OpenCloseMovie, id} = this.props
		OpenCloseMovie(id)
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