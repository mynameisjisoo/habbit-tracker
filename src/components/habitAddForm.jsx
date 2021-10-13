import React, { Component } from 'react';

class HabitAddForm extends Component {
  getInput = () => {
    const input = document.querySelector('.add-input');
    console.log(input.value);
    // input.value = '';
  };
  render() {
    return (
      <form className='add-form'>
        <input
          type='text'
          className='add-input'
          placeholder='Please enter your habit'
        />
        <button className='add-btn' onClick={this.getInput}>
          add
        </button>
      </form>
    );
  }
}

export default HabitAddForm;
