import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef(); //ref 생성
  formRef = React.createRef();
  onSubmit = event => {
    event.preventDefault(); //submit발생하면 기본적으로 페이지 리프레시됨. 그래서 브라우저 기능 취소함
    const name = this.inputRef.current.value; //ref안의 현재있는 요소의 value
    name && this.props.onAdd(name); //name이 있으면(=비어있지않으면=true면) props.onAdd에 name전달
    // this.inputRef.current.value = ''; 초기화 방법1
    this.formRef.current.reset(); //초기화방법2
  };
  render() {
    console.log('habitAddForm');
    return (
      <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef} //브라우저에 컴포넌트 표기되면 이걸통해 inputRef연결되서 input요소 읽어올 수 있음
          type='text'
          className='add-input'
          placeholder='Please enter your habit'
        />
        <button className='add-btn'>add</button>
      </form>
    );
  }
}

export default HabitAddForm;
