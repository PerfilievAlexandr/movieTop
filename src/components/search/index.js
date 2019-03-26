import React, {Component} from 'react';
import {searchMovies} from '../../ac';
import {connect} from 'react-redux';
import './style.css';

class Search extends Component {

    render() {
        return (
            <div className="search">
                <input
                    onChange={this.handleChange}
                    placeholder='Поиск'
                />
            </div>
        )
    };

    handleChange = (evt) => {
        const {searchMovies} = this.props;
        searchMovies(evt.target.value);
    };
}


export default connect(null, {searchMovies})(Search);