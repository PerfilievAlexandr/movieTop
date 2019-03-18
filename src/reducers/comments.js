import {LOAD_COMMENTS, ADD_COMMENT, START, SUCCESS, DELETE_COMMENT} from '../constants/actionTypes'
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
                commentsList: {
                    ...comments.commentsList,
                    [payload.comment.id]: {
                        id: payload.comment.id,
                        user: payload.comment.user,
                        text: payload.comment.text
                    }
                }
            };

        case DELETE_COMMENT:
            const copyComments = {...comments};
            delete copyComments.commentsList[payload.id];
            return copyComments;

        default:
            return comments;
    }
}