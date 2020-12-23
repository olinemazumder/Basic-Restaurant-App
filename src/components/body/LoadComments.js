import React from "react";


const LoadComments=(props)=>{
    return(
        <div>

            {props.comments.map(comment=>{
                return(
                    <div key={comment.id}>
                        <hr/>
                        <h5>{comment.author}</h5>
                        <p>{comment.comment}</p>
                        <p>rating: {comment.rating} </p>
                        <p>{comment.date}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default LoadComments