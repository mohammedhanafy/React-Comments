export default (state, action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case 'DELETE_COMMENT':
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload)
            }
        case 'SET_EDIT_COMMENT':
            return {
                ...state,
                setCommentEditForm: true,
                editableComment: action.payload,
            }
        case 'UPDATE_COMMENT':
            return {
                ...state,
                comments: state.comments.map(comment => {
                        if(comment.id == action.payload.id) {
                            return {
                                ...comment,
                                body: action.payload.body
                            }
                        } else {
                            return comment;
                        }
                }),
                setCommentEditForm: false,
                editableComment: '',
            }
        case 'LIKE_COMMENT': 
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if(comment.id == action.payload.id) {
                        return {
                            ...comment,
                            likes: comment.likes + 1
                        }
                    } else {
                        return comment;
                    }
                })
            }
        case 'UNLIKE_COMMENT':
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if(comment.id == action.payload.id) {
                        return {
                            ...comment,
                            likes: comment.likes - 1
                        }
                    } else {
                        return comment;
                    }
                })
            }
        case 'ADD_REPLY':
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if(comment.id == action.payload.comment.id) {
                        return {
                            ...comment,
                            replies: comment.replies.concat({
                                id: Math.floor(Math.random() * 1000000),
                                body: action.payload.reply,
                                likes: 0 
                            })
                        }
                    } else {
                        return comment;
                    }
                })
            }
        case 'DELETE_REPLY': 
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if(comment.id == action.payload.commentId) {
                        return {
                            ...comment,
                            replies: comment.replies.filter(reply => {
                                return reply.id !== action.payload.replyId
                            })
                        }
                    } else {
                        return comment;
                    }
                })
            }
        case 'SET_EDIT_REPLY':
            return {
                ...state,
                setReplyEditForm: true,
                editableReply: action.payload,
            }
        case 'UPDATE_REPLY':
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if(comment.id == action.payload.comment.id) {
                        return {
                            ...comment,
                            replies: comment.replies.map(reply => {
                                if(reply.id == action.payload.id) {
                                    return {
                                        ...reply,
                                        body: action.payload.reply
                                    }
                                } else {
                                    return reply;
                                }
                            })
                        }
                    } else {
                        return comment;
                    }
                }),
                setReplyEditForm: false,
                editableReply: ''
            }
        case 'LIKE_REPLY': 
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if(comment.id == action.payload.commentId) {
                        return {
                            ...comment,
                            replies: comment.replies.map(reply => {
                                if(reply.id == action.payload.replyId) {
                                    return {
                                        ...reply,
                                        likes: reply.likes + 1
                                    }
                                } else {
                                    return reply;
                                }
                            })
                        }
                    } else {
                        return comment;
                    }
                })
            }
        case 'UNLIKE_REPLY': 
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if(comment.id == action.payload.commentId) {
                        return {
                            ...comment,
                            replies: comment.replies.map(reply => {
                                if(reply.id == action.payload.replyId) {
                                    return {
                                        ...reply,
                                        likes: reply.likes - 1
                                    }
                                } else {
                                    return reply;
                                }
                            })
                        }
                    } else {
                        return comment;
                    }
                })
            }
        default:
            return state;
    }
}