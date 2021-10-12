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
  handleIncrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++; //💩 spread syntax이용해서 복사해도 다차원객체는 주소값이 복사됨 (=원본객체에 영향줌)
    /* this.setState({ habits: habits});  key인 habits(왼쪽, state의 habits)에 로컬변수habit(오른쪽)배열을 넣는다<div className=""></div>
    habits:habits 처럼 key와 value가 동일한 이름이면 하나로 생략 가능 */
    this.setState({ habits });
  };

  handleDecrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count; //💩
    this.setState({ habits });
  };

  handleDelete = habit => {
    // filter을 이용해서 수정사항을 반영한 배열을 생성함
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });

    //   다른방법: splice이용{
    //   const habits = [...this.state.habits];
    //   const index = habits.indexOf(habit);
    //   habits.splice(index, 1);
    //   this.setState({ habits });
    //  }
  };

  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          /> //habit이라는 prop이름에 화살표함수 인자로 받은 각각의 habit 전달
        ))}
      </ul>
    );
  }
}

export default Habits;
