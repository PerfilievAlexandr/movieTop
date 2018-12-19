import {OPEN_MOVIE} from '../constants/actionTypes'

const initialState = {
    open: false,
    id: ''
}

export default (modalMovie = initialState, action) => {
    const {type, payload} = action
    
    switch (type) {
        case OPEN_MOVIE: 
            return {...modalMovie, open: !modalMovie.open, id: payload}
        default: 
            return modalMovie
    }
}