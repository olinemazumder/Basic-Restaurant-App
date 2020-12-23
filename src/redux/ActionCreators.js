import * as actionTypes from "./ActionTypes";

export const addComment=(dishID,author,rating,comment)=>{
    return{
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishID: dishID,
            author: author,
            rating: rating,
            comment: comment
        }
    }
}