import React, { useContext } from 'react';
import { GlobalContext } from '../context-api';

const reply = ({reply, comment}) => {
    const { deleteReplyHandler, setReplyEditHandler, setReplyLikeHandler, setReplyUnlikeHandler } = useContext(GlobalContext);

    return (
        <div style={{paddingLeft: '50px', paddingTop: '10px'}}>
            <li style={{listStyleType: 'none'}}>{reply.body}</li>
            {reply.likes == 0 ? <button onClick={() => setReplyLikeHandler(comment.id, reply.id)}>Like</button> 
            : <button onClick={() => setReplyUnlikeHandler(comment.id, reply.id)}>Unlike</button> }
            <button onClick={() => setReplyEditHandler(reply)}>Edit</button>
            <button onClick={() => deleteReplyHandler(comment.id, reply.id)}>Delete</button>                        
        </div>
    )
} 

export default reply;