import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'coding', count: 0 }
    ]
  };
  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit key={habit.id} habit={habit} /> //habit이라는 prop이름에 화살표함수 인자로 받은 각각의 habit 전달
        ))}
      </ul>
    );
  }
}

export default Habits;
