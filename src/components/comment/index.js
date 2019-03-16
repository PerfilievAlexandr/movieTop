import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectedComments} from '../../selectors';
import PropTypes from 'prop-types';
import './style.css';





class Comment extends Component {

    render() {
        const {comment} = this.props;
        return (
            <div>
               <p className='movieModal__user-comment'>{comment ? comment.user : null}</p>
               <p className='movieModal__comment-text'>{comment ? comment.text : null}</p>
            </div>
        );
    };
}

Comment.propTypes = {
    comment: PropTypes.object,
    id: PropTypes.string
};

export default connect((store, id) =>({
    comment: selectedComments(store, id)
}))(Comment);