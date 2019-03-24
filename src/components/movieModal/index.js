import React, {Component} from 'react'
import './style.css'
import {OpenCloseMovie, deleteMovie} from '../../ac'
import {toggleOpenMovie, selectedMovieModal} from '../../selectors'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CommentList from '../commentList';
import Rating from '../rating';


class MovieModal extends Component {
    render() {
        const {movie} = this.props

        return (
            <div className='movieModal'>
                <div className='movieModal__container'>
                    <button
                        className='movieModal__close'
                        onClick={this.onChange}
                    >закрыть
                    </button>
                    <h2 className='movieModal__title'>{movie.title}</h2>
                    <div className='movieModal__info'>
                        <div
                            className='movieModal__picture'
                        >
                            <img src={movie.picture} alt="баннер" width='200px' height='300px'/>
                        </div>
                        <ul className='movieModal__data'>
                            <li className='movieModal__year'>
                                <span>Год:</span>
                                {movie.date}
                            </li>
                            <li className='movieModal__top-block'>
                                <span>Рейтинг: {movie.top}/10</span>
                                <Rating
                                    movie={movie}
                                />
                            </li>
                        </ul>
                    </div>
                    <p className='movieModal__discription'>
                        {movie.text}
                    </p>
                    <CommentList
                        comments={movie.comments}
                    />
                    <button
                        className='movieModal__delete btn'
                        onClick={this.onDeleteMovie}
                    >Удалить фильм
                    </button>
                </div>

            </div>
        )
    }

    onChange = () => {
        this.props.OpenCloseMovie()
    };

    onDeleteMovie = () => {

        const {movie, deleteMovie, OpenCloseMovie} = this.props;

        deleteMovie(movie.id);
        OpenCloseMovie();
    }

}

MovieModal.propTypes = {
    movie: PropTypes.object,
    id: PropTypes.string,
}

export default connect((state) => ({
    movie: selectedMovieModal(state),
    open: toggleOpenMovie(state)
}), {OpenCloseMovie, deleteMovie})(MovieModal)