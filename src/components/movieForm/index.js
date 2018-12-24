import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'
import {addMovie, OpenCloseForm} from '../../ac'

class MovieForm extends Component {
	state = {
		movieTitle: '',
		year: undefined,
		top: undefined,
		picture: undefined,
		text: ''

	}

	render() {
		return (
			<form className='movieForm'>
				<h3>Форма добавления фильма</h3>
				<div className='movieForm__inputs'>
					<label htmlFor="movieFormIDTitle" >Название фильма</label>
					<input
						type="text"
						onChange={this.handleChangeTitle}
						id='movieFormIDTitle'
						value={this.state.movieTitle}
						required
					/>
					<label htmlFor="movieFormIDYear" >Год выхода</label>
					<input
						type="number"
						onChange={this.handleChangeYear}
						id='movieFormIDYear'
						value={this.state.year}
					/>
					<label htmlFor="movieFormIDTop" >Рейтинг</label>
					<input
						type="number"
						onChange={this.handleChangeTop}
						id='movieFormIDTop'
						value={this.state.top}
					/>
					<label htmlFor="movieFormIDPicture" >Баннер</label>
					<input
						type="text"
						onChange={this.handleChangePicture}
						id='movieFormIDPicture'
						value={this.state.picture}
					/>
					<label htmlFor="movieFormIDDiscription" >Описание</label>
					<input
						type="textarea"
						onChange={this.handleChangeText}
						id='movieFormIDDiscription'
						value={this.state.text}
					/>
				</div>
				<input
					className="movieForm__sent-form btn"
					type="submit"
					onClick={this.HandleClickSentForm}
				/>
			</form>
		)

	}

	handleChangeTitle = (evt) => {
		this.setState({
			movieTitle: evt.target.value
		})
	}

	handleChangeYear = (evt) => {
		this.setState({
			year: evt.target.value
		})
	}

	handleChangeTop = (evt) => {
		this.setState({
			top: evt.target.value
		})
	}

	handleChangePicture = (evt) => {
		this.setState({
			picture: evt.target.value
		})
	}

	handleChangeText = (evt) => {
		this.setState({
			text: evt.target.value
		})
	}

	HandleClickSentForm = (evt) => {
		evt.preventDefault()
		this.props.addMovie(this.state)
		this.setState({
			movieTitle: '',
			year: '',
			top: '',
			picture: '',
			text: ''
		})
		this.props.OpenCloseForm()
	}



}

export default connect(
	null,
	{addMovie, OpenCloseForm}
)(MovieForm)