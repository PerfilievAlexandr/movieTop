import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectedComments, idOpenMovie} from '../../selectors';
import PropTypes from 'prop-types';
import './style.css';
import {deleteComment} from '../../ac'


class Comment extends Component {

    render() {
        const {comment} = this.props;
        return (
            <div className='comment'>
                <div className='comment__header'>
                    <p className='comment__user'>{comment ? comment.user : null}</p>
                    <button
                        type='comment__button'
                        onClick={this.onHandleClick}
                    >
                        удалить
                    </button>
                </div>
                <p className='comment__text'>{comment ? comment.text : null}</p>

            </div>
        );
    };
    
    onHandleClick = () => {
        const { id, deleteComment, parentId} = this.props;
        deleteComment(id, parentId);
    }
    
}

Comment.propTypes = {
    comment: PropTypes.object,
    id: PropTypes.string
};

export default connect((store, id) => ({
    comment: selectedComments(store, id),
    parentId: idOpenMovie(store)
}), {deleteComment})(Comment);