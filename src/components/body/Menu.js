import React, {Component} from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from 'reactstrap'
import {connect} from 'react-redux'
import {addComment} from "../../redux/ActionCreators";

const mapStateToProps=state=>{
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        addComment: (dishID,author,rating,comment) => dispatch(
        //     {
        //     type: actionTypes.ADD_COMMENT,
        //     payload: {
        //         dishID: dishID,
        //         author: author,
        //         rating: rating,
        //         comment: comment
        //     }
        // }
            addComment(dishID,author,rating,comment)
        )
        //
        // addComment: (dishID,author,rating,comment) => dispatch({
        //     type: "ADD_COMMENT",
        //     payload: {
        //         dishID: dishID,
        //         author: author,
        //         rating: rating,
        //         comment: comment
        //     }
        // })
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        ModalOpen: false
    }
    onDishSelect = (dish) => {
        this.setState({
            selectedDish: dish,
            ModalOpen: !this.state.ModalOpen
        })
    }
    toggleModal = () => {
        this.setState({
            ModalOpen: !this.state.ModalOpen
        })
    }

    render() {
        document.title="Menu"
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={() => this.onDishSelect(item)}
                />
            )
        })
        let dishDetail = null
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter(comment=>{
                return comment.dishID === this.state.selectedDish.id
            })
            dishDetail =
                <DishDetail
                    comments={comments}
                    dish={this.state.selectedDish}
                    addComment={this.props.addComment}
                />
        }

        return (
            <div className='container'>
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.ModalOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color='secondary' onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Menu)