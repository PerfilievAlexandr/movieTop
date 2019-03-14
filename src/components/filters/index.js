import React, {Component} from 'react'
import {MOVIE_STYLE, MOVIE_YEAR, MOVIE_RATING} from '../../constants/actionTypes'


class Filters extends Component {
    render() {

        const optionsStyle = MOVIE_STYLE.map((option, index) => {
            return <option key={index} value="option">{option}</option>
        })
        const optionsYears = MOVIE_YEAR.map((option, index) => {
            return <option key={index} value="option">{option}</option>
        })
        const optionsRating = MOVIE_RATING.map((option, index) => {
            return <option key={index} value="option">{option}</option>
        })

        return (
            <section className="filter">
                <div className="filter__wrapper">
                    <span className="filter__style">Жанр</span>
                    <select name="movieStyles" id="filterMovieStyles">
                        {optionsStyle}
                    </select>
                    <div className="filter__year">
                        <span className="filter__year-from">год c </span>
                        <select name="year-from" id="filterYearFrom">
                            {optionsYears}
                        </select>
                        <span className="filter__year-from">по </span>
                        <select name="year-from" id="filterYearFrom">
                            {optionsYears}
                        </select>
                    </div>
                    <span className="filter__rating">Рейтинг</span>
                    <select name="movieRating" id="filterMovieRating">
                        {optionsRating}
                    </select>


                </div>
            </section>
        )
    }
}


export default Filters