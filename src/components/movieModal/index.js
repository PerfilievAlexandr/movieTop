import React, { Component } from 'react'
import './style.css'
import {toggleOpenMovie} from '../../ac'
import {toggleOpen, selectedMovieModal} from '../../selectors'
import { connect } from 'react-redux'



class MovieModal extends Component {
    render() {
        const { movie } = this.props

        console.log(this.props)
 

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
            </div>
        )
    }

    onChange = () => {
        this.props.toggleOpenMovie()
    }
}

export default connect((state) => ({
    movie: selectedMovieModal(state),
    open: toggleOpen(state) 
}), {toggleOpenMovie})(MovieModal)