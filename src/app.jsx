import React from 'react';
import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Input from './components/input-field';

class App extends Component {
  render() {
    return (
      <>
        <nav className='navbar'>
          <span className='navbar__logo'>
            <i className='fas fa-quidditch'></i>
          </span>
          Habit Tracker
          <span className='navbar__count'>0</span>
        </nav>
        <body className='main'>
          <Input />
          <Habits />
        </body>
      </>
    );
  }
}

export default App;
