import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
  state = {
    name: '',
    age: '',
  };

  nameChangeHandler = (event) => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  };

  ageChangehandler = (event) => {
    event.preventDefault();
    this.setState({ age: event.target.value });
  };

  render() {
    return (
      <div className='AddPerson'>
        <input
          type='text'
          name='Name'
          value={this.state.name}
          placeholder='Name'
          onChange={this.nameChangeHandler}
        />
        <input
          type='text'
          name='age'
          value={this.state.age}
          placeholder='Age'
          onChange={this.ageChangehandler}
        />
        <button
          onClick={() =>
            this.props.personAdded(this.state.name, this.state.age)
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default AddPerson;
