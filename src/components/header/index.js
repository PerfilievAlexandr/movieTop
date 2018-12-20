import React, { Component } from 'react'
import { searchMovies } from '../../ac'
import { connect } from 'react-redux'
import './style.css'

class Header extends Component {

    render() {
        return (
            <section className="header">
                <div className="header--wrapper">
                    <div className="header--search">
                        <span className="header--search-title">Поиск</span>
                        <input 
                            onChange={this.handleChange}
                        />
                    </div>

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