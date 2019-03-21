import React, {Component} from 'react';
import {MOVIE_STYLE, MOVIE_YEAR, MOVIE_RATING} from '../../constants/actionTypes';
import './style.css'


class Filters extends Component {
    render() {

        const optionsStyle = MOVIE_STYLE.map((option, index) => {
            return <option key={index} value='option'>{option}</option>
        });
        const optionsYears = MOVIE_YEAR.map((option, index) => {
            return <option key={index} value='option'>{option}</option>
        });
        const optionsRating = MOVIE_RATING.map((option, index) => {
            return <option key={index} value='option'>{option}</option>
        });

        return (
            <section className='filter'>
                <div className='filter__wrapper'>
                    <h2 className='filter__title'>Фильтры</h2>
                    <label className='filter__style' htmlFor='filterMovieStyles'>Жанр
                        <select name='movieStyles' id='filterMovieStyles'>
                            {optionsStyle}
                        </select>
                    </label>
                    <div className='filter__year'>
                        <label className='filter__year-from' htmlFor='filterYearFrom'>год c
                            <select name='year-from' id='filterYearFrom'>
                                {optionsYears}
                            </select>
                        </label>
                        <label className='filter__year-to' htmlFor='filterYearTo'>по
                            <select name='year-from' id='filterYearTo'>
                                {optionsYears}
                            </select>
                        </label>
                    </div>
                    <label className='filter__rating' htmlFor='filterMovieRating'>Рейтинг
                        <select name='movieRating' id='filterMovieRating'>
                            {optionsRating}
                        </select>
                    </label>
                </div>
            </section>
        );
    };
}


export default Filters;