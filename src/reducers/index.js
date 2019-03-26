import {combineReducers} from 'redux';
import movies from './movies';
import search from './search';
import toggleOpenMovie from './toggleOpenMovie';
import comments from './comments';
import filters from './filters';

const reducer = combineReducers({
	movies,
	search,
	toggleOpenMovie,
	comments,
	filters
});

export default reducer;