import React from "react";
import {Card, CardImg, CardBody, CardTitle} from 'reactstrap'

const MenuItem=(props)=>{
    return(
        <div>
          <Card style={{margin: "10px"}}>
              <CardBody style={{cursor: "pointer"}} onClick={props.DishSelect}>
                  <CardImg width='100%'
                           height='100%'
                           alt={props.dish.name}
                           src={props.dish.image}
                           style={{
                               opacity: "0.7",
                           }}
                  />

                      <CardTitle><h5>{props.dish.name}</h5></CardTitle>

              </CardBody>
          </Card>
        </div>
    )
}
export default MenuItem