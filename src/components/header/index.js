import React, {Component} from 'react'
import {searchMovies, OpenCloseForm, openCloseFilters} from '../../ac'
import {connect} from 'react-redux'
import './style.css'
import MovieForm from "../movieForm";
import {toggleOpenForm, toggleOpenFilters} from '../../selectors'
import Filters from '../filters'

class Header extends Component {


    render() {

        const {openForm, openFilters} = this.props
        const addMovieForm = openForm ? <MovieForm/> : null
        const filtersOpen = openFilters ? <Filters /> : null
        const buttonText = openForm ? 'Закрыть форму' : 'Добавить фильм'


        return (
            <section className="header">
                <div className="header__wrapper">
                    <h1 className='header__title'>MOVIE TOP</h1>
                    <div className="header__search">
                            <input
                                onChange={this.handleChange}
                                placeholder='Поиск'
                            />
                        <button
                            className="header__filters"
                            onClick={this.handleToggleFiltersOpen}
                        />
                        {filtersOpen}
                    </div>
                    <button
                        className='header__addfilm btn'
                        onClick={this.handleToggleFormOpen}
                    >
                        {buttonText}
                    </button>
                    {addMovieForm}
                </ div>
            </section>
        )
    }

    handleChange = (evt) => {
        const {searchMovies} = this.props
        searchMovies(evt.target.value)
    }

    handleToggleFormOpen = () => {
        this.props.OpenCloseForm()
    }

    handleToggleFiltersOpen = () => {
        this.props.openCloseFilters()
    }
}


export default connect((state) => ({
    openForm: toggleOpenForm(state),
    openFilters: toggleOpenFilters(state)
}), {searchMovies, OpenCloseForm, openCloseFilters})(Header)