import React from "react";
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";

const DishDetail=(props)=>{
    const {image,name,description,price}=props.dish
    return(
        <Card style={{marginTop: '10px'}}>
            <CardImg top src={image} alt={name} />
            <CardBody style={{textAlign: 'left'}}>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
                <CardText className='text-center'><h6>{price} TK/-</h6> </CardText>
                <hr/>
                <LoadComments comments={props.comments}/>
                <hr/>
                <CommentForm dishID={props.dish.id} addComment={props.addComment}/>
            </CardBody>
        </Card>
    )
}
export default DishDetail