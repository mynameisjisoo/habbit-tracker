import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddForm />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            /> //habit이라는 prop이름에 화살표함수 인자로 받은 각각의 habit 전달
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
