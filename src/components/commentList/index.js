import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from '../comment'
import './style.css'
import CommentForm from '../commentForm/commentForm';

class CommentList extends Component {

    render() {
        const { comments } = this.props

        const commentsMovie = comments.map((id) => (
            <li key={id}>
                <Comment
                    id={id}
                />
            </ li>
        ))

        const comment = commentsMovie.length > 0 ? commentsMovie : null


        return (
            <div className='movieModal__comment-list'>
                <h4 className='movieModal__comment-list-title'>Комментарии</h4>
                <ul className='movieModal__comment-list-comments'>
                    {comment}
                </ul>
                <CommentForm />
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array
}

export default CommentList