import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context-api';

const addComment = (props) => {
    const { addCommentHandler, setCommentEditForm, editableComment, editCommentHandler } = useContext(GlobalContext);

    useEffect(() => {
        if(setCommentEditForm === true) {
            setComment(editableComment.body);
        }
    }, [setCommentEditForm])

    const [comment, setComment] = useState('');

    const submitComment = (e) => {
        e.preventDefault();

        const commentData = {
            id: Math.floor(Math.random() * 1000000),
            body: comment,
            replies: [],
            likes: 0
        }
        
        addCommentHandler(commentData);

        setComment('');
    }

    const editComment = (e) => {
        e.preventDefault();

        const commentData = {
            id: editableComment.id,
            body: comment,
            replies: [],
        }
        
        editCommentHandler(commentData);

        setComment('');
    }

    return (
        <div>
            {!setCommentEditForm ? <form onSubmit={submitComment}>
                <textarea name="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                <input type="submit" value="Add comment" />
            </form> : <form onSubmit={editComment}>
                <textarea name="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                <input type="submit" value="Edit comment" />
            </form>}
        </div>
    )
}

export default addComment;