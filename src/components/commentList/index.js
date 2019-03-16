import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment';
import './style.css';
import CommentForm from '../commentForm/commentForm';
import {connect} from 'react-redux';
import {loadComments} from '../../ac';
import {commentsLoaded, commentsLoading} from '../../selectors'
import Loader from '../loader';

class CommentList extends Component {

    render() {
        const {comments, loading} = this.props;

        const commentsMovie = comments.map((id) => (
            <li key={id}>
                <Comment
                    id={id}
                />
            </ li>
        ));

        const comment = commentsMovie.length > 0 ? commentsMovie : null;

        if (loading) return <Loader/>;
        return (
            <div className='movieModal__comment-list'>
                <h4 className='movieModal__comment-list-title'>Комментарии</h4>
                <ul className='movieModal__comment-list-comments'>
                    {comment}
                </ul>
                <CommentForm/>
            </div>
        );
    };

    componentDidMount() {
        const {loadComments, loaded} = this.props;

        if (!loaded) loadComments();
    };
}

CommentList.propTypes = {
    comments: PropTypes.array
};

export default connect(
    (store) => ({
        loading: commentsLoading(store),
        loaded: commentsLoaded(store)
    }),
    {loadComments})(CommentList);