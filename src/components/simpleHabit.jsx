import React, { useCallback, useEffect, useState } from 'react';

const SimpleHabit = () => {
  //react hook에서 state정의하는 방법(useState API이용)
  const [count, setCount] = useState(0);
  const spanRef = React.useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  /*useEffect : 컴포넌트가 마운트 될 때와 업데이트 될 때 마다 호출됨
  만약 어떤 값이 변경될때만 호출하고 싶으면 두번째인자에 지정해주면 됨.
  두번째인자를 지정하지않으면 마운트될때나 업데이트될때마다 호출되고 
  두번째인자에 [](빈 배열) 넣으면 마운트 되었을 때만 호출됨
  */
  useEffect(() => {
    console.log(`mounted & updated! : ${count}`);
  }, [count]); //count가 변경될때만 useEffect 호출
  return (
    <li className='habit'>
      <span ref={spanRef} className='habit-name'>
        Reading
      </span>
      <span className='habit-count'>{count}</span>
      <button className='habit-button habit-increase' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
/* 
class컴포넌트에서 멤버변수는 클래스가 만들어질 때 한번 만들어지고 컴포넌트 변경되도 render함수만 반복 호출되지만
function 컴포넌트는 props이나 state가 변경되면 이 코드블럭 전체(함수전체)가 계속 반복 호출됨
그래서 지역변수들도 호출될때마다 반복해서 새로 만들어짐
그런데 그럴때마다 useState가 0으로 초기화되지않고 이전 값을 기억하는 이유는?
useState는 알아서 동일한 값을 메모리에 저장하고 있음 (useState를 아무리 많이 호출해도 state는 따로 저장되어져서 계속 동일한 값(이전에 저장한 값) 받아옴)
*/
/*
함수형 컴포넌트에서 createRef를 이용하면 함수호출될때마다 새로운 ref를 만들고 할당함.
그래서 리액트 훅에서 제공하는 useRef 이용
useRef : 한번만 만들고 메모리에 저장해서 재사용
콜백함수도 마찬가지로 useCallback() 사용
주의점 : ??  실전프젝에서 알려주실 예정
 */

/**UseEffect
 * 컴포넌트가 마운트되었을 때, 업데이트 될 떄 마다 호출됨
 */
