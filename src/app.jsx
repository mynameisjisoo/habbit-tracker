import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Header from './components/header';

class App extends Component {
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
    /* this.setState({ habits: habits});  key인 habits(왼쪽, state의 habits)에 로컬변수habit(오른쪽)배열을 넣는다
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

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }]; //name:name <-동일한 이름은 생략가능
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

  countHabits = () => {
    //카운트가 0개 이상인 habit만 갯수로 계산
    return this.state.habits.filter(habit => habit.count > 0).length;
  };

  render() {
    console.log('app');

    return (
      <>
        <Header totalCount={this.countHabits()} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
