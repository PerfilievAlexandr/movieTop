import {SEARCH_MOVIES} from '../constants/actionTypes'

export default (search = '', action) => {
    const {type, payload} = action
    

    switch (type) {
        case SEARCH_MOVIES:
        console.log(payload)
            return search = payload
        default:
            return search
    }
}