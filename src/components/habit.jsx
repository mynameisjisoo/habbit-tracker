import React, { Component } from 'react';

class Habit extends Component {
  //Habit는 자체적으로 갖고있는 state는 없고, 외부에서 받은 props를 보여주는 컵포넌트
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    // console.log(this.props);
    const { name, count } = this.props.habit; // 각각의 데이터 변수에 담기(동일한 이름 써야 함)
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncrement}
        >
          <i className='far fa-plus-square'></i>
        </button>

        <button
          className='habit-button habit-decrease'
          onClick={this.handleDecrement}
        >
          <i className='far fa-minus-square'></i>
        </button>
        <button
          className='habit-button habit-delete'
          onClick={this.handleDelete}
        >
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
