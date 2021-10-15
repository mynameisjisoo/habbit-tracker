import React, { memo } from 'react';
//함수형 컴포넌트
//memo :PureComponent처럼 props 변경없으면 랜더 안됨
const HabitAddForm = memo(props => {
  console.log('habit Add form');
  const inputRef = React.createRef(); //ref 생성
  const formRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault(); //submit발생하면 기본적으로 페이지 리프레시됨. 그래서 브라우저 기능 취소함
    const name = inputRef.current.value; //ref안의 현재있는 요소의 value
    name && props.onAdd(name); //name이 있으면(=비어있지않으면=true면) props.onAdd에 name전달
    // this.inputRef.current.value = ''; 초기화 방법1
    formRef.current.reset(); //초기화방법2
  };
  return (
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      <input
        ref={inputRef} //브라우저에 컴포넌트 표기되면 이걸통해 inputRef연결되서 input요소 읽어올 수 있음
        type='text'
        className='add-input'
        placeholder='Please enter your habit'
      />
      <button className='add-btn'>add</button>
    </form>
  );
});

export default HabitAddForm;
