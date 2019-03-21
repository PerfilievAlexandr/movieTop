import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css'

class Navigation extends Component {

    render() {
        return(
            <ul className='navigation'>
                <li className = 'navigation__item'>
                    <NavLink className = 'navigation__link  navigation__link--active' to = '/movies'>Фильмы</NavLink>
                </li>
                <li className = 'navigation__item'>
                    <NavLink className = 'navigation__link' to = '/filters'>Фильтры</NavLink>
                </li>
                <li className = 'navigation__item'>
                    <NavLink className = 'navigation__link' to = '/addMovie'>Добавить фильм</NavLink>
                </li>
            </ul>
        );
    };
}



export default Navigation;