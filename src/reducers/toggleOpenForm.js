import {OPEN_FORM} from '../constants/actionTypes'

const initialState = {
	open: false
}

export default (form = initialState, action) => {
	const {type} = action

	switch (type) {
		case OPEN_FORM:
			return {open: !form.open}
		default:
			return form
	}
}