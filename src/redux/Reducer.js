import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
import {combineReducers} from 'redux'
import * as actionTypes from './ActionTypes'

// const initialState = {
//     dishes: DISHES,
//     comments: COMMENTS,
//
// }
//
// export const Reducer = (state=initialState,action)=>{
//      if(action.type==="ADD_COMMENT"){
//           const newComment = action.payload
//           newComment.id = state.comments.length
//           newComment.date= new Date().toDateString()
//          console.log(newComment)
//          return {
//              ...state,
//              comments: state.comments.concat(newComment)
//          }
//      }
//     return state
// }

// const dishReducer = (dishState= DISHES, action)=>{
//     return dishState
// }
//
//  const CommentReducer = (commentState=COMMENTS,action)=>{
//      if(action.type==="ADD_COMMENT"){
//           const newComment = action.payload
//           newComment.id = commentState.length
//           newComment.date= new Date().toDateString()
//          console.log(newComment)
//          return  commentState.concat(newComment)
//      }
//     return commentState
// }
//
// export const Reducer = combineReducers({
//     dishes: dishReducer,
//     comments: CommentReducer
// })

const dishReducer = (dishState= DISHES, action)=>{
    switch (action.type){
        default: return dishState
    }
}

 const CommentReducer = (commentState=COMMENTS,action)=>{
    switch (action.type)
    {
        case actionTypes.ADD_COMMENT:
            const newComment = action.payload
            newComment.id = commentState.length
            newComment.date= new Date().toDateString()
            console.log(newComment)
            return  commentState.concat(newComment)
        default:
            return commentState
     }

}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: CommentReducer
})