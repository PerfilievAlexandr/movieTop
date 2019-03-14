import {FILTERED_MOVIES, OPEN_FILTERS} from '../constants/actionTypes'

const initialState = {
	selectedStyle: [],
	dateRange: {
		from: null,
		to: null
	},
	openForm: false
}

export default (filters = initialState, action) => {
	const {type} = action

	switch (type) {
		case OPEN_FILTERS:
			return {
				...filters,
				openForm: !filters.openForm
			}

		default:
			return filters
	}
}