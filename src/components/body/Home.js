import React, {Component} from 'react';
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return {
        dishes: state.dishes,
        comments: state.comments,
    }
}

class Home extends Component {


    render() {
        document.title="Restaurant"
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(mapStateToProps) (Home);