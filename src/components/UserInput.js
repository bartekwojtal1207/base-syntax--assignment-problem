import React, { Component } from 'react';
import '../App.css';


const UserInput = (props) => {
// class UserInput extends Component {

    // render() {
        return (
            <div className="form-control">
                <input type="text" onChange={props.changed} value={props.username} />
            </div>
        )
    // }
}

export default UserInput;