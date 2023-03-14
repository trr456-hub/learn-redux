import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Counter from "../Components/Counter";
import { decrease, increase, setDIFF } from "../Modules/Counter";

const CounterContainer = () => {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일하다
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual // todos 가 렌더링 될때 counter은 렌더를 방지해 주는 redux함수
  );
  // useDispatch 는 리덕스 스토어 의 dispatch 를 함수에서 사용할 수 있게 해주는 Hook
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수 생성
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDIFF(diff));

  //   console.log(number);
  //   console.log(diff);
  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 dispatch 하는 함수를 props로 넘겨준다
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
