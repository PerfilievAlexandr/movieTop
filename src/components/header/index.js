import React, { Component } from 'react'
import { searchMovies } from '../../ac'
import { connect } from 'react-redux'
import './style.css'

class Header extends Component {

    render() {
        return (
            <section className="header">
                <div className="header__wrapper">
                    <div className="header__search">
                        <span className="header__search-title">Поиск</span>
                        <input 
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        className='header__addfilm btn'
                    >Добавить фильм</button>

                </ div>
            </section>
        )
    }

    handleChange = (evt) => {
        const { searchMovies } = this.props
        searchMovies(evt.target.value)
    }
}


export default connect(null, { searchMovies })(Header)