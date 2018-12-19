import {comments} from '../fixtures'
import {LOAD_COMMENTS} from '../constants/actionTypes'
import {utils} from './utils'

const initialState = utils(comments)

export default (comments = initialState, action) => {
    const {type} = action

    switch (type) {
        case LOAD_COMMENTS:
            return comments
        default:
            return comments
    }
}