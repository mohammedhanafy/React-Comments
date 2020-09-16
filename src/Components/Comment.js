import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context-api';
import AddReply from './AddReply';
import Reply from './Reply';

const comment = ({ comment }) => {
    const { deleteCommentHandler, setCommentEditHandler, setCommentLikeHandler, setCommentUnlikeHandler } = useContext(GlobalContext);

    const [replyForm, setReplyForm] = useState(false);

    return (
        <div>
            <li style={{listStyleType: 'none', paddingTop: '10px'}}>
                {comment.body}
            </li>
            {comment.likes == 0 ? <button onClick={() => setCommentLikeHandler(comment)}>Like</button>
            : <button onClick={() => setCommentUnlikeHandler(comment)}>Unlike</button>}
            <button onClick={() => setCommentEditHandler(comment)}>Edit</button>
            <button onClick={() => setReplyForm(!replyForm)}>Reply</button>
            <button onClick={() => deleteCommentHandler(comment.id)}>Delete</button>
            {comment.replies.map(reply => (
                <Reply key={reply.id} reply={reply} comment={comment} />
            ))}
            {replyForm ? 
            <div style={{paddingLeft: '50px', paddingTop: '10px'}}>
                <AddReply comment={comment} /> 
             </div>
            : null}
        </div>
    )
}

export default comment;