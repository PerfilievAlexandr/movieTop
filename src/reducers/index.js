import {combineReducers} from 'redux'
import movies from './movies'
import search from './search'
import toggleOpenMovie from './toggleOpenMovie'
import comments from './comments'

const reduser = combineReducers({
    movies,
    search,
    toggleOpenMovie,
    comments
})

export default reduser