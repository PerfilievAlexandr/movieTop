import React, {Component} from 'react';
import {searchMovies, OpenCloseForm, openCloseFilters, loadMovies} from '../../ac';
import {connect} from 'react-redux';
import './style.css';
import {toggleOpenForm, toggleOpenFilters, moviesLoading, moviesLoaded} from '../../selectors';
import {NavLink} from 'react-router-dom'

class Header extends Component {


    render() {

        const {openForm} = this.props
        const buttonText = openForm ? 'Закрыть форму' : 'Добавить фильм'


        return (
            <section className="header">
                <div className="header__wrapper">
                    <NavLink to='/movies'><h1 className='header__title'>MOVIE TOP</h1></NavLink>
                    <NavLink to='/addMovie'>
                        <button
                            className='header__addfilm btn'
                            onClick={this.handleToggleFormOpen}
                        >
                            {buttonText}
                        </button>
                    </NavLink>
                    <NavLink to='/filters'>
                        <button
                            className="header__filters"
                            onClick={this.handleToggleFiltersOpen}
                        />
                    </NavLink>
                    <div className="header__search">
                        <input
                            onChange={this.handleChange}
                            placeholder='Поиск'
                        />
                    </div>
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

    componentDidMount() {
        const {moviesData, loaded} = this.props;
        if (!loaded) moviesData && moviesData();
    };
}


export default connect((state) => ({
    openForm: toggleOpenForm(state),
    openFilters: toggleOpenFilters(state),
    loading: moviesLoading(state),
    loaded: moviesLoaded(state)
}), {searchMovies, OpenCloseForm, openCloseFilters, moviesData: loadMovies})(Header)