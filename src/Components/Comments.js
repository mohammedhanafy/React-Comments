import React, { useContext } from 'react';
import { GlobalContext } from '../context-api';
import Comment from './Comment';

const comments = (props) => {
    const { comments } = useContext(GlobalContext);

    return (
        <div>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

export default comments;