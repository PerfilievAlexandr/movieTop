import {Articles} from '../fixtures'
import {LOAD_MOVIES, ADD_COMMENT} from '../constants/actionTypes'
import {utils} from './utils'

const initialState = utils(Articles)

export default (movies = initialState, action) => {
   const {type, payload} = action

   switch (type) {
        case LOAD_MOVIES:
            return movies
        case ADD_COMMENT: 
            console.log('payloadObg', payload.randomId)
            return {
                ...movies,
               [payload.selectedMovieId]: {...movies[payload.selectedMovieId], comments: [...movies[payload.selectedMovieId].comments, payload.randomId]}
            }
        default:
            return movies
   }
}