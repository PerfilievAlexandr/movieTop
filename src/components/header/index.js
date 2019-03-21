import React, {Component} from 'react';
import {searchMovies, loadMovies} from '../../ac';
import {connect} from 'react-redux';
import './style.css';
import {toggleOpenFilters, moviesLoading, moviesLoaded} from '../../selectors';
import Navigation from '../navigation'

class Header extends Component {

    render() {
        return (
            <section className="header">
                <div className="header__wrapper">
                    <Navigation />
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
        const {searchMovies} = this.props;
        searchMovies(evt.target.value);
    }

    componentDidMount() {
        const {moviesData, loaded} = this.props;
        if (!loaded) moviesData && moviesData();
    };
}


export default connect((state) => ({
    openFilters: toggleOpenFilters(state),
    loading: moviesLoading(state),
    loaded: moviesLoaded(state)
}), {searchMovies, moviesData: loadMovies})(Header)