import {
	LOAD_MOVIES,
	ADD_COMMENT,
	CHANGE_RATING,
	ADD_MOVIE,
	SELECT_MOVIE_STYLE,
	SUCCESS,
	START, DELETE_COMMENT
} from '../constants/actionTypes';
import {utils} from './utils';

const initialState = {
	moviesList: {},
	loading: false,
	loaded: false,
	error: false
};

export default (movies = initialState, action) => {
	const {type, payload} = action;

	switch (type) {

		case LOAD_MOVIES + START:
			return {
				...movies,
				loading: true,
				loaded: false
			};

		case LOAD_MOVIES + SUCCESS:
			return {
				...movies,
				moviesList: utils(payload),
				loading: false,
				loaded: true
			};

		case ADD_COMMENT:
			return {
				...movies,
				moviesList: {
					...movies.moviesList,
					[payload.selectedMovieId]: {
						...movies.moviesList[payload.selectedMovieId],
						comments: [...movies.moviesList[payload.selectedMovieId].comments, payload.comment.id]
					}
				}
			};

		case CHANGE_RATING:
			return {
				...movies,
				moviesList: {
					...movies.moviesList,
					[payload.selectedMovieId]: {...movies.moviesList[payload.selectedMovieId], top: parseInt(payload.top)}
				}
			};

		case SELECT_MOVIE_STYLE:
			return {
				...movies
			};

		case ADD_MOVIE:
			return {
				...movies,
				[payload.randomMovieId]: {id: payload.randomMovieId, date: +payload.movie.year, title: payload.movie.movieTitle, top: +payload.movie.top, picture: payload.movie.picture, text: payload.movie.text, comments: [] }
			};

        case DELETE_COMMENT:
			const filteredComments = movies.moviesList[payload.parentId].comments.filter((comment) => comment !== payload.id);
			return {
				...movies,
				moviesList: {
					...movies.moviesList,
					[payload.parentId]: {
						...movies.moviesList[payload.parentId],
						comments: filteredComments
					}
				}
			};

		default:
			return movies
	}
}