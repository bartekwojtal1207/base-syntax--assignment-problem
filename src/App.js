import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

import './App.css';

class App extends Component {
    state = { username: 'elo smiechu' };

    clickHandler = () => {
      console.log('elioioosadads');
        this.setState({username: 'twoja smiechu'})
    };

    changeHandler = (event) => {
      console.log(event.target.value)
        this.setState({ username: event.target.value})
    };

  render() {

    const style = {
          width: '400px',
          color: 'red'
    };

    return (

      <div className="App">
        <ol>
          <li style={style}>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <div className={'row'}>
            <UserOutput style={style}username={this.state.username} clickHandler={this.clickHandler.bind(this)}>asdsadsa</UserOutput>
            <UserInput changed={this.changeHandler.bind(this)} username={this.state.username}/>
            {/*<UserOutput>smiechu</UserOutput>*/}
            {/*<UserOutput>smiechu</UserOutput>*/}
            {/*<UserOutput>smiechu</UserOutput>*/}
            {/*<UserOutput>smiechu</UserOutput>*/}
            {/*<UserOutput>smiechu</UserOutput>*/}
            {/*<UserOutput>smiechu</UserOutput>*/}
        </div>
      </div>
    );
  }
}

export default App;
