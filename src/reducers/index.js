import {combineReducers} from 'redux'
import movies from './movies'
import search from './search'
import toggleOpenMovie from './toggleOpenMovie'
import comments from './comments'
import toggleOpenForm from './toggleOpenForm'

const reduser = combineReducers({
	movies,
	search,
	toggleOpenMovie,
	comments,
	toggleOpenForm
})

export default reduser