import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    comments: [],
    setCommentEditForm: false,
    editableComment: '',
    setReplyEditForm: false,
    editableReply: ''
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addCommentHandler = (comment) => {
        dispatch({type: 'ADD_COMMENT', payload: comment});
    }

    const deleteCommentHandler = (id) => {
        dispatch({type: 'DELETE_COMMENT', payload: id});
    }

    const setCommentEditHandler = (comment) => {
        dispatch({type: 'SET_EDIT_COMMENT', payload: comment});
    }

    const editCommentHandler = (comment) => {
        dispatch({type: 'UPDATE_COMMENT', payload: comment});
    }

    const setCommentLikeHandler = (comment) => {
        dispatch({type: 'LIKE_COMMENT', payload: comment});
    }

    const setCommentUnlikeHandler = (comment) => {
        dispatch({type: 'UNLIKE_COMMENT', payload: comment});
    }

    const addReplyHandler = (reply) => {
        dispatch({type: 'ADD_REPLY', payload: reply});
    }

    const deleteReplyHandler = (commentId, replyId) => {
        const commentReplyIds = {
            commentId: commentId,
            replyId: replyId
        }
        dispatch({type: 'DELETE_REPLY', payload: commentReplyIds});
    }

    const setReplyEditHandler = (reply) => {
        dispatch({type: 'SET_EDIT_REPLY', payload: reply});
    }

    const editReplyHandler = (reply) => {
        dispatch({type: 'UPDATE_REPLY', payload: reply})
    }

    const setReplyLikeHandler = (commentId, replyId) => {
        const commentReplyIds = {
            commentId: commentId,
            replyId: replyId
        }
        dispatch({type: 'LIKE_REPLY', payload: commentReplyIds});
    }

    const setReplyUnlikeHandler = (commentId, replyId) => {
        const commentReplyIds = {
            commentId: commentId,
            replyId: replyId
        }
        dispatch({type: 'UNLIKE_REPLY', payload: commentReplyIds});
    }

    return (<GlobalContext.Provider value={{
        comments: state.comments,
        setCommentEditForm: state.setCommentEditForm,
        editableComment: state.editableComment,
        setReplyEditForm: state.setReplyEditForm,
        editableReply: state.editableReply,
        addCommentHandler,
        deleteCommentHandler,
        setCommentEditHandler,
        editCommentHandler,
        setCommentLikeHandler,
        setCommentUnlikeHandler,
        addReplyHandler,
        deleteReplyHandler,
        setReplyEditHandler,
        editReplyHandler,
        setReplyLikeHandler,
        setReplyUnlikeHandler
    }}>
        {children}
    </GlobalContext.Provider>)
}