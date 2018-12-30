import {combineReducers} from 'redux'
import movies from './movies'
import search from './search'
import toggleOpenMovie from './toggleOpenMovie'
import comments from './comments'
import toggleOpenForm from './toggleOpenForm'
import filtersData from './filtersData'

const reduser = combineReducers({
	movies,
	search,
	toggleOpenMovie,
	comments,
	toggleOpenForm,
	filtersData
})

export default reduser