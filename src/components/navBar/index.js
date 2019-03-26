import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css'
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <ul className='navigation'>
                <li className='navigation__item'>
                    <NavLink
                        className='navigation__link'
                        to='/movies'
                        activeClassName='navigation__link--active'
                    >Фильмы</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink
                        className='navigation__link'
                        to='/filters'
                        activeClassName='navigation__link--active'
                    >Фильтры</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink
                        className='navigation__link'
                        to='/addMovie'
                        activeClassName='navigation__link--active'
                    >Добавить фильм</NavLink>
                </li>
            </ul>
        );
    };
}

export default withRouter(NavBar);
