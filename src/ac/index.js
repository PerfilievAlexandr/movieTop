import {
	SEARCH_MOVIES,
	OPEN_MOVIE,
	ADD_COMMENT,
	CHANGE_RATING,
	ADD_MOVIE,
	OPEN_FORM,
	OPEN_FILTERS,
	LOAD_MOVIES
} from '../constants/actionTypes'

export function loadMovies() {
	return (dispatch) => {
		const movies = fetch('/movies')
			.then(response => console.log('qqqq', response.json()))
			.then(data => data);
		console.log(movies);
		dispatch({
			type: LOAD_MOVIES,
			payload: movies
		});
	}
}

export function searchMovies(search) {
	return {
		type: SEARCH_MOVIES,
		payload: search
	}
}

export function OpenCloseMovie(id) {
	return {
		type: OPEN_MOVIE,
		payload: id
	}
}

export function OpenCloseForm() {
	return {
		type: OPEN_FORM
	}
}

export function openCloseFilters() {
	return {
		type: OPEN_FILTERS
	}
}

export function addComment(comment, selectedMovieId) {
	return (dispatch) => {
		const randomId = Math.random().toString(16).slice(2)
		dispatch({
			type: ADD_COMMENT,
			payload: {comment, selectedMovieId, randomId},
		})
	}
}

export function changeRating(top, selectedMovieId) {
	return {
		type: CHANGE_RATING,
		payload: {top, selectedMovieId}
	}
}

export function addMovie(movie) {
	return (dispatch) => {
		const randomMovieId = Math.random().toString(16).slice(2)
		dispatch({
			type: ADD_MOVIE,
			payload: {movie, randomMovieId}
		})
	}
}