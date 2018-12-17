import {Articles} from '../fixtures'
import {LOAD_MOVIES} from '../constants/actionTypes'
import {utils} from './utils'

const initialState = utils(Articles)

export default (movies = initialState, action) => {
   const {type} = action

   switch (type) {
        case LOAD_MOVIES:
            return movies
        default:
            return movies
   }
}