import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <i className=' header-logo fas fa-quidditch'></i>
        <span>Habit Tracker </span>
        <span className='header-count'>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
