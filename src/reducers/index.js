import {combineReducers} from 'redux'
import movies from './movies'
import search from './search'
import toggleOpenMovie from './toggleOpenMovie'

const reduser = combineReducers({
    movies,
    search,
    toggleOpenMovie
})

export default reduser