import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  //Lifecycle method 상황에 맞게 구현하면 됨
  componentDidMount() {
    //컴포넌트가 UI상에 등록될 때 호출(사용자에게 보여질 때)
    console.log(`habit: ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    //컴포넌트가 없어질 때
    console.log(`habit: ${this.props.habit.name}will unmount`);
  }

  // Habit는 자체적으로 갖고있는 state는 없고, 외부에서 받은 props를 보여주는 컵포넌트
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
    const { name, count } = this.props.habit; // 각각의 데이터 변수에 담기(동일한 이름 써야 함)

    console.log(`habit: ${name}`);

    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncrement}
          // onClick={() => {
          //   this.props.onIncrement(this.props.habit);
          // }} handleIncremnt 없이 이렇게 익명함수로 전달 할 수도 있음
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
