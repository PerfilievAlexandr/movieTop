import {LOAD_MOVIES, SEARCH_MOVIES, OPEN_MOVIE} from '../constants/actionTypes'

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

export function toggleOpenMovie(id) {
    return {
        type: OPEN_MOVIE,
        payload: id
    }
}