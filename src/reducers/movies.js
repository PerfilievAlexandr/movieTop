import {Articles} from '../fixtures'
import {LOAD_MOVIES, ADD_COMMENT, CHANGE_RATING} from '../constants/actionTypes'
import {utils} from './utils'

const initialState = utils(Articles)

export default (movies = initialState, action) => {
   const {type, payload} = action

   switch (type) {
        case LOAD_MOVIES:
            return movies
        case ADD_COMMENT: 
            return {
                ...movies,
               [payload.selectedMovieId]: {...movies[payload.selectedMovieId], comments: [...movies[payload.selectedMovieId].comments, payload.randomId]}
            }
        case CHANGE_RATING:
            return {
                ...movies,
                [payload.selectedMovieId]: {...movies[payload.selectedMovieId], top: parseInt(payload.top)}
            }
        default:
            return movies
   }
}