import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className='input'>
        <input
          className='input__textfield'
          value='Habit'
          type='text'
          name=''
          id=''
        />
        <button className='input__btn'>Add</button>
      </div>
    );
  }
}

export default Input;
