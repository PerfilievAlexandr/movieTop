import {LOAD_MOVIES, SEARCH_MOVIES} from '../constants/actionTypes'

export function loadMovies() {
    return {
        type: LOAD_MOVIES
    }
}

export function searchMovies(search) {
    return {
        type: SEARCH_MOVIES,
        payload: search
    }
}