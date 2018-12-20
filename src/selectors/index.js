import {createSelector} from 'reselect'

export const moviesData = (state) => state.movies
export const moviesId = (_, ownProps) => ownProps.id
export const searchData = (state) => state.search.toLowerCase()
export const toggleOpenMovie = (state) => state.toggleOpenMovie.open
export const idOpenMovie = (state) => state.toggleOpenMovie.id
export const movieModalId = (state) => state.toggleOpenMovie.id
export const commentsData = (state) => state.comments
export const commentsId = (_, ownProps) => ownProps.id


export const arrMoviesData = createSelector(moviesData, movies => Object.values(movies))

export const selectedMovies = createSelector(moviesData, moviesId, (movies, id) => {
    return movies[id]
})

export const selectedComments = createSelector(commentsData, commentsId, (comments, id) => {
    return comments[id]
})

export const selectedMovieModal = createSelector(moviesData, movieModalId, (movies, id) => {
    return movies[id]
})

export const foundMovies = createSelector(arrMoviesData, searchData, (movies, search) => {
    if (search.length > 0) {
        return movies.filter((movie) => (movie.title.toLowerCase().indexOf(search) !== -1))
    } else {
        return movies
    }    
})
