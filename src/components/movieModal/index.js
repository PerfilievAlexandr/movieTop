import React, { Component } from 'react'
import './style.css'
import {OpenCloseMovie} from '../../ac'
import {toggleOpenMovie, selectedMovieModal} from '../../selectors'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CommentList from '../commentList';



class MovieModal extends Component {
    render() {
        const { movie, selectedMovieId} = this.props

        return (
            <div className='movieModal'>
                <button
                    className='movieModal__close'
                    onClick = {this.onChange}
                >закрыть</button>
                <h2 className='movieModal__title'>{movie.title}</h2>
                <div className='movieModal__info'>
                    <div className='movieModal__picture'>
                        <img 
                            src='../../img/1+1.jpg'
                            alt = 'баннер'
                        />
                    </div>
                    <div className='movieModal__data'>
                        <span>Год: {movie.date}</span>
                        <span>Рейтинг: {movie.top}</span>
                    </div>
                </div>
                <p className='movieModal__discription'>
                    {movie.text}
                </p>
                <CommentList 
                    comments = {movie.comments}
                    selectedMovieId = {selectedMovieId}
                />
            </div>
        )
    }

    onChange = () => {
        this.props.OpenCloseMovie()
    }

}

MovieModal.propTypes = {
    movie: PropTypes.object,
    id: PropTypes.string,
}

export default connect((state) => ({
    movie: selectedMovieModal(state),
    open: toggleOpenMovie(state) 
}), {OpenCloseMovie})(MovieModal)