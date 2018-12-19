import {comments} from '../fixtures'
import {LOAD_COMMENTS, ADD_COMMENT} from '../constants/actionTypes'
import {utils} from './utils'

const initialState = utils(comments)

export default (comments = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case LOAD_COMMENTS:
            return comments
        case ADD_COMMENT:
            return {
                ...comments,
                [payload.randomId]: {id: [payload.randomId], user: [payload.comment.user], text: [payload.comment.text]}
            }
        default:
            return comments
    }
}