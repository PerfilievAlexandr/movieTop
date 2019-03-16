import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeRating} from '../../ac';
import './style.css';


class Rating extends Component {

	state = {
		activeStyle: true
	};

	render() {
		const {movie} = this.props;

		const stars = [];

		for (let i = 1; i <= 10; i++) {
			stars.push(
				<label
					className={i > movie.top ? 'movieModal__star' : 'movieModal__star movieModal__star--active' }
					onClick={this.handleChange}
					key={i}
				>
					<input
						type='radio'
						name='top-film'
						value={i}
					/>
				</label>
			);
		}

		return (
			<div className='movieModal__top-block-stars'>
				<ul
					className='movieModal__stars-items'
				>
					{stars}
				</ul>
			</div>
		);
	};

	handleChange = (evt) => {
		const {changeRating, movie} = this.props;
		changeRating(evt.target.value, movie.id);

		this.setState({
			activeStyle: !this.state.activeStyle
		});
	};
}

Rating.propTypes = {
	movie: PropTypes.object,
	changeRating: PropTypes.func
};

export default connect(null, {changeRating})(Rating);