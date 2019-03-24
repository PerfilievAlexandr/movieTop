import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.css';
import {addMovie} from '../../ac';
import {NavLink} from 'react-router-dom'

class MovieForm extends Component {
    state = {
        title: '',
        date: undefined,
        top: undefined,
        picture: undefined,
        text: ''
    };

    render() {
        return (
            <form className='movieForm'>
                <h3>Форма добавления фильма</h3>
                <div className='movieForm__inputs'>
                    <label htmlFor="movieFormIDTitle">Название фильма</label>
                    <input
                        type="text"
                        onChange={this.handleChangeTitle}
                        id='movieFormIDTitle'
                        value={this.state.title}
                        required
                    />
                    <label htmlFor="movieFormIDYear">Год выхода</label>
                    <input
                        type="number"
                        onChange={this.handleChangeYear}
                        id='movieFormIDYear'
                        value={this.state.date}
                    />
                    <label htmlFor="movieFormIDTop">Рейтинг</label>
                    <input
                        type="number"
                        onChange={this.handleChangeTop}
                        id='movieFormIDTop'
                        value={this.state.top}
                    />
                    <label htmlFor="movieFormIDPicture">Баннер</label>
                    <input
                        type="text"
                        onChange={this.handleChangePicture}
                        id='movieFormIDPicture'
                        value={this.state.picture}
                    />
                    <label htmlFor="movieFormIDDiscription">Описание</label>
                    <input
                        type="textarea"
                        onChange={this.handleChangeText}
                        id='movieFormIDDiscription'
                        value={this.state.text}
                    />
                </div>
                    <button
                        className="movieForm__sent-form btn"
                        onClick={this.HandleClickSentForm}
                    >
                        <NavLink to = '/movies'>
                        отправить
                        </NavLink>
                    </button>


            </form>
    )

    }

    handleChangeTitle = (evt) => {
        this.setState({
            title: evt.target.value
        })
    };

    handleChangeYear = (evt) => {
        this.setState({
            date: evt.target.value
        })
    };

    handleChangeTop = (evt) => {
        this.setState({
            top: evt.target.value
        })
    };

    handleChangePicture = (evt) => {
        this.setState({
            picture: evt.target.value
        })
    };

    handleChangeText = (evt) => {
        this.setState({
            text: evt.target.value
        })
    };

    HandleClickSentForm = (evt) => {
        evt.preventDefault();
        this.props.addMovie(this.state);
        this.setState({
        tittle: '',
        date: '',
        top: '',
        picture: '',
        text: ''
    });
    };



    }

    export default connect(
    null,
    {addMovie}
    )(MovieForm);