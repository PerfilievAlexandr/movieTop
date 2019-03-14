import {combineReducers} from 'redux'
import movies from './movies'
import search from './search'
import toggleOpenMovie from './toggleOpenMovie'
import comments from './comments'
import toggleOpenForm from './toggleOpenForm'
import filters from './filters'

const reduser = combineReducers({
	movies,
	search,
	toggleOpenMovie,
	comments,
	toggleOpenForm,
	filters
})

export default reduser