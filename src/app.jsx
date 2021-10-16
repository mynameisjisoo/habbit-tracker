import React, { Component } from 'react';
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
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        //해당하는 habit만 골라서
        return { ...habit, count: habit.count + 1 }; // 다른것 다 똑같이 복사하는데 count만 새 값으로 덮어쓴다
      }
      return item;
    });
    this.setState({ habits });

    ///
    /*💩 spread syntax이용해서 복사해도 다차원객체는 주소값이 복사됨 (=원본객체에 영향줌)
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++; */
    /* this.setState({ habits: habits});  key인 habits(왼쪽, state의 habits)에 로컬변수habit(오른쪽)배열을 넣는다
    habits:habits 처럼 key와 value가 동일한 이름이면 하나로 생략 가능 */

    /**
     * state를 직접 수정하지 않는 이유
     * this.state.habits[index].count <- 이런식으로 오브젝트안의 데이터를 수정하면
     * 결국은 동일한 오브젝트이기 때문에 동일하다고 판단해서 렌더링이 일어나지 않음
     */
  };

  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count }; //새로운 객체를 생성해서 리턴해주므로 객체의 참조값이 변경되어 해당 객체만 렌더링
      }
      return item; //기존 this.state.habits 객체 그대로 리턴함(참조값 변경안되서 렌더링 안되게)
    });
    this.setState({ habits });
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count; //💩
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
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
    // const habits = this.state.habits.map(habit => {
    //   habit.count = 0;
    //   return habit;
    // });
  };

  countHabits = () => {
    //카운트가 0개 이상인 habit만 갯수로 계산
    return this.state.habits.filter(habit => habit.count > 0).length;
  };

  render() {
    console.log('app');

    return (
      <div>
        <Header totalCount={this.countHabits()} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
