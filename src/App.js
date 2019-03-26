import React, {Component} from 'react';
import MoviesList from './components/moviesList';
import Header from './components/header';
import MovieForm from './components/movieForm'
import Filters from './components/filters'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/filters' component = {Filters}/>
                    <Route path='/addMovie' component = {MovieForm}/>
                    <Route path='/movies' component = {MoviesList} />
                </Switch>

            </div>
        );
    }
}

export default App;
