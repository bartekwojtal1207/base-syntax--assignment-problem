import React, { Component } from 'react';
import '../App.css';



class UserOutput extends Component {

    render() {
        return (
            <div className="welcome-container">
                <p onClick={this.props.clickHandler}>{this.props.children}</p>
                <p>{this.props.username}</p>
            </div>
        )
    }

};


export default UserOutput;