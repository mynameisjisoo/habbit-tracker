import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0
  };
  handleIncrement = () => {
    //state 오브젝트 안의 count를 증가한뒤 state업데이트함
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
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
        <button className='habit-button habit-delete'>
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
