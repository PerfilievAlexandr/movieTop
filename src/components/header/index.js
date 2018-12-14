import React, { Component } from 'react'
import {searchMovies} from '../../ac'
import {connect} from 'react-redux'
import './style.css'

class Header extends Component {
    
    render() {
        return (
            <section className="header">
                <div className="header--wrapper">
                    <input  
                        className="header--search"
                        onChange={this.handleChange}
                    />
                </ div>
            </section>
        )
    }

    handleChange = (evt) => {
        const {searchMovies} = this.props
        searchMovies(evt.target.value)    
    }
}


export default connect(null,
    {searchMovies})(Header)