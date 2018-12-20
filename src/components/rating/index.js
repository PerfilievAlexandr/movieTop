import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {changeRating} from '../../ac'
import './style.css'



class Rating extends Component {
    render() {
        const { movie } = this.props        
        
        const stars = []
        const starsTop = []

        for (let i = 1; i <= 10; i++) {
            stars.push(
                    <label 
                        className='movieModal__star' 
                        onClick={this.handleChange}
                        key={i}
                    >
                        <input 
                            type='radio'
                            name='top-film'
                            value={i}
                        />
                    </label>                 
            )
        }

        for (let i = 1; i <= movie.top; i++) {
            starsTop.push(
                <li key={i} className='movieModal__top-item'>*</li>
            )
        }


        return (
            <div className='movieModal__top-block-stars'>
                <div 
                    className='movieModal__stars-items'
                >
                    {stars}
                </div>
                <ul className='movieModal__top-items'>
                    {starsTop}
                </ul>
            </div>
        )
    }
    
    handleChange = (evt) => {
        const {changeRating, movie} = this.props
        changeRating(evt.target.value, movie.id)
    } 


}

Rating.propTypes = {
    movie: PropTypes.object,
    changeRating: PropTypes.func
}

export default connect(null, {changeRating})(Rating)