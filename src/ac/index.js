import {
    SEARCH_MOVIES,
    OPEN_MOVIE,
    ADD_COMMENT,
    CHANGE_RATING,
    ADD_MOVIE,
    LOAD_MOVIES,
    START,
    SUCCESS,
    FAIL,
    LOAD_COMMENTS,
    DELETE_COMMENT
} from '../constants/actionTypes';

export function loadMovies() {
    return (dispatch) => {

        dispatch({
            type: LOAD_MOVIES + START
        });

        console.log('load movies');

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
                        comment: data,
                        selectedMovieId: selectedMovieId,
                    }
                });
            })
    };
}

export function deleteComment(id, parentId) {
    return (dispatch) => {
        fetch('/delete-comment', {
                method: "delete",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    parentId: parentId
                })
            }
        )
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: DELETE_COMMENT,
                    payload: {
                        id: data,
                        parentId: parentId
                    }
                })
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