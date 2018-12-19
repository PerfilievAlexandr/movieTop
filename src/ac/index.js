import { LOAD_MOVIES, SEARCH_MOVIES, OPEN_MOVIE, ADD_COMMENT } from '../constants/actionTypes'

export function loadMovies() {
    return {
        type: LOAD_MOVIES,
    }
}

export function searchMovies(search) {
    return {
        type: SEARCH_MOVIES,
        payload: search
    }
}

export function OpenCloseMovie(id) {
    return {
        type: OPEN_MOVIE,
        payload: id
    }
}

export function addComment(comment, selectedMovieId) {
    return (dispatch) => {
        const randomId = Math.random().toString(16).slice(2)
        dispatch({
            type: ADD_COMMENT,
            payload: {comment, selectedMovieId, randomId},
            generateId: true
        })
    }
}