import {MOVIE_STYLE, MOVIE_STYLE_LOAD} from '../constants/actionTypes'

const initialState = {
	style: MOVIE_STYLE
}

export default (filters = initialState, action) => {
	const {type} = action

	switch (type) {
		case MOVIE_STYLE_LOAD:
			return filters

		default:
			return filters
	}
}