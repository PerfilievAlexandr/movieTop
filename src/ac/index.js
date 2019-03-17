import {
    SEARCH_MOVIES,
    OPEN_MOVIE,
    ADD_COMMENT,
    CHANGE_RATING,
    ADD_MOVIE,
    OPEN_FORM,
    OPEN_FILTERS,
    LOAD_MOVIES,
    START,
    SUCCESS,
    FAIL,
    LOAD_COMMENTS
} from '../constants/actionTypes';

export function loadMovies() {
    return (dispatch) => {

        dispatch({
            type: LOAD_MOVIES + START
        });

        fetch('/movies')
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: LOAD_MOVIES + SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: LOAD_MOVIES + FAIL,
                    payload: error
                });
            });
    };
}

export function loadComments() {
    return (dispatch) => {

        dispatch({
            type: LOAD_COMMENTS + START
        });

        fetch('/comments')
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: LOAD_COMMENTS + SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: LOAD_COMMENTS + FAIL,
                    payload: error
                });
            });
    };
}

export function searchMovies(search) {
    return {
        type: SEARCH_MOVIES,
        payload: search
    };
}

export function OpenCloseMovie(id) {
    return {
        type: OPEN_MOVIE,
        payload: id
    };
}

export function OpenCloseForm() {
    return {
        type: OPEN_FORM
    };
}

export function openCloseFilters() {
    return {
        type: OPEN_FILTERS
    };
}

export function addComment(comment, selectedMovieId) {
    return (dispatch) => {
        const randomId = Math.random().toString(16).slice(2);
        fetch('/add-comments', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    comment: comment,
                    selectedMovieId: selectedMovieId,
                    randomId: randomId
                })
            }
        )
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: ADD_COMMENT,
                    payload: {
                        data: comment,
                        selectedMovieId: selectedMovieId,
                        randomId: randomId
                    }
                });
            })
    };
}

export function changeRating(top, selectedMovieId) {
    return {
        type: CHANGE_RATING,
        payload: {top, selectedMovieId}
    };
}

export function addMovie(movie) {
    return (dispatch) => {
        const randomMovieId = Math.random().toString(16).slice(2);
        dispatch({
            type: ADD_MOVIE,
            payload: {movie, randomMovieId}
        });
    };
}