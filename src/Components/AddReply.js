import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context-api';

const addReply = ({ comment }) => {

    const { addReplyHandler, setReplyEditForm, editableReply, editReplyHandler } = useContext(GlobalContext);

    useEffect(() => {
        if(setReplyEditForm === true) {
            setReply(editableReply.body);
        }
    }, [setReplyEditForm])

    const [reply, setReply] = useState('');

    const submitReply = (e) => {
        e.preventDefault();
        
        const replyData = {
            comment: comment,
            reply: reply
        }

        addReplyHandler(replyData);

        setReply('');

    }

    const editReply = (e) => {
        e.preventDefault();
        
        const replyData = {
            id: editableReply.id,
            reply: reply,
            comment: comment
        }

        editReplyHandler(replyData);

        setReply('');
    }

    return (
        <div>
            {!setReplyEditForm ? <form onSubmit={submitReply}>
                <textarea name="reply" value={reply} onChange={(e) => setReply(e.target.value)} />
                <input type="submit" value="Add Reply" />
            </form> : <form onSubmit={editReply}>
                <textarea name="reply" value={reply} onChange={(e) => setReply(e.target.value)} />
                <input type="submit" value="Edit Reply" />
            </form>}
        </div>
    )
}

export default addReply;