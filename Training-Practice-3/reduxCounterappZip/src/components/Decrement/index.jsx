import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../Redux/Reducers/CountReducer";

const Index = () => {
  const dispatch = useDispatch();
  const onDecrement = () => {
    //setValue((prevState) => prevState - 1);
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default Index;
