import React from "react";
import { useDispatch } from "react-redux";
import { increament } from "../Redux/Reducers/CountReducer";
// import { userContext } from "./App.js";
const Index = () => {
  //const { count, setValue } = useContext(0);
  const dispatch = useDispatch();
  function onIncrement() {
    //setValue((prevState) => prevState + 1);
    dispatch(increament());
  }

  return (
    <div>
      <button onClick={() => onIncrement()}>Increment</button>
    </div>
  );
};

export default Index;
