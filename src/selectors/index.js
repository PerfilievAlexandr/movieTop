import {createSelector} from 'reselect'

export const moviesData = (state) => state.movies.moviesList;
export const moviesLoading = (state) => state.movies.loading;
export const moviesLoaded = (state) => state.movies.loaded;
export const moviesId = (_, ownProps) => ownProps.id;
export const searchData = (state) => state.search.toLowerCase();
export const toggleOpenMovie = (state) => state.toggleOpenMovie.open;
export const idOpenMovie = (state) => state.toggleOpenMovie.id;
export const commentsData = (state) => state.comments.commentsList;
export const commentsLoading = (state) => state.comments.loading;
export const commentsLoaded = (state) => state.comments.loaded;
export const commentsId = (_, ownProps) => ownProps.id;

export const arrMoviesData = createSelector(moviesData, movies => Object.values(movies));

export const selectedMovies = createSelector(moviesData, moviesId, (movies, id) => {
	return movies[id];
});

export const selectedComments = createSelector(commentsData, commentsId, (comments, id) => {
	return comments[id];
});

export const selectedMovieModal = createSelector(moviesData, idOpenMovie, (movies, id) => {
	return movies[id];
});

export const foundMovies = createSelector(arrMoviesData, searchData, (movies, search) => {
	if (search.length > 0) {
		return movies.filter((movie) => (movie.title.toLowerCase().indexOf(search) !== -1));
	} else {
		return movies;
	}
});
