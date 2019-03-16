import {LOAD_COMMENTS, ADD_COMMENT, START, SUCCESS} from '../constants/actionTypes'
import {utils} from './utils'

const initialState = {
    commentsList: {},
    loading: false,
    loaded: false,
    error: false
};

export default (comments = initialState, action) => {
    const {type, payload} = action;

    switch (type) {

        case LOAD_COMMENTS + START:
            return {
                ...comments,
                loading: true,
                loaded: false
            };

        case LOAD_COMMENTS + SUCCESS:
            return {
                ...comments,
                commentsList: utils(payload),
                loading: false,
                loaded: true
            };

        case ADD_COMMENT:
            return {
                ...comments,
                [payload.randomId]: {id: [payload.randomId], user: [payload.comment.user], text: [payload.comment.text]}
            };

        default:
            return comments;
    }
}