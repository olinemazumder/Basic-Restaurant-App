import React, {Component} from 'react';
import {Form,Button,Input} from 'reactstrap'
import {connect} from 'react-redux'



class CommentForm extends Component {
    state = {
        author: '',
        comment: '',
        rating: ''
    }
    handleInputChange=event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        // this.props.dispatch({
        //     type: "ADD_COMMENT",
        //     payload:{
        //         author: this.state.author,
        //         comment: this.state.comment,
        //         rating: this.state.rating,
        //         dishID: this.props.dishID
        //     }
        // })
        // this.props.addComment(this.state.author,this.state.comment,this.state.rating,this.props.dishID)
        this.props.addComment(
            this.props.dishID,
            this.state.author,
            this.state.rating,
            this.state.comment
        )
        this.setState({
            author: '',
            comment: '',
            rating: ''
        })
    }

    render() {

        return (
            <div>
              <Form onSubmit={event=>this.handleSubmit(event)}>
                  <Input
                     name="author"
                     type="text"
                     value={this.state.author}
                     onChange={(event)=>this.handleInputChange(event)}
                     placeholder="Your Name"
                     required
                  />
                  <br/>
                  <Input
                      name='rating'
                      type='select'
                      value={this.state.rating}
                      onChange={(event)=>this.handleInputChange(event)}
                      required
                  >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                  </Input>

                  <br/>
                  <Input
                      name="comment"
                      type="textarea"
                      placeholder='Write something'
                      value={this.state.comment}
                      onChange={(event)=>this.handleInputChange(event)}
                      required
                  />
                  <br/>
                  <Button type='submit'>Submit Feedback</Button>
              </Form>
            </div>
        );
    }
}

export default connect()(CommentForm);