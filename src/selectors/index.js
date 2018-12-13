import {createSelector} from 'reselect'

export const moviesData = (state) => state.movies
export const moviesId = (_, ownProps) => ownProps.id


export const arrMoviesData = createSelector(moviesData, movies => Object.values(movies))

export const selectedMovies = createSelector(moviesData, moviesId, (movies, id) => {
    return movies[id]
})