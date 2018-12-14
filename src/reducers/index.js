import {combineReducers} from 'redux'
import movies from './movies'
import search from './search'

const reduser = combineReducers({
    movies,
    search
})

export default reduser