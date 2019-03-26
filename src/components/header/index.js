import React, {Component} from 'react';
import {loadMovies} from '../../ac';
import {connect} from 'react-redux';
import './style.css';
import {moviesLoading, moviesLoaded} from '../../selectors';
import NavBar from '../navBar';
import Search from '../search';

class Header extends Component {

    render() {
        return (
            <section className="header">
                <div className="header__wrapper">
                    <NavBar />
                    <Search />
                </ div>
            </section>
        );
    };

    componentDidMount() {
        const {moviesData, loaded} = this.props;
        if (!loaded) moviesData && moviesData();
    };
}


export default connect((state) => ({
    loading: moviesLoading(state),
    loaded: moviesLoaded(state)
}), {moviesData: loadMovies}, null, {pure: false})(Header);