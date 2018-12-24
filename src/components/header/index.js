import React, {Component} from 'react'
import {searchMovies, OpenCloseForm} from '../../ac'
import {connect} from 'react-redux'
import './style.css'
import MovieForm from "../movieForm";
import {toggleOpenForm} from '../../selectors'

class Header extends Component {


	render() {

		const {open} = this.props

		const addMovieForm = open ? <MovieForm /> : null
		const buttonText = open ? 'Закрыть форму' : 'Добавить фильм'

		return (
			<section className="header">
				<div className="header__wrapper">
					<div className="header__search">
						<span className="header__search-title">Поиск</span>
						<input
							onChange={this.handleChange}
						/>
					</div>
					<button
						className='header__addfilm btn'
						onClick={this.handleToggleFormOpen}
					>{buttonText}</button>
					{addMovieForm}
				</ div>
			</section>
		)
	}

	handleChange = (evt) => {
		const {searchMovies} = this.props
		searchMovies(evt.target.value)
	}

	handleToggleFormOpen = () => {
		this.props.OpenCloseForm()
	}
}


export default connect((state) => ({
	open: toggleOpenForm(state)
}), {searchMovies, OpenCloseForm})(Header)