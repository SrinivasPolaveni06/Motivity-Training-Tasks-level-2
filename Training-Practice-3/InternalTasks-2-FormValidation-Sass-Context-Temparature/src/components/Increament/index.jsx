import React from "react";
// import { userContext } from "./App.js";
import { useContext } from "react";
import { userContext } from "../ContextApp";
import "./index.css";

const Index = () => {
  const { count, setValue } = useContext(userContext);
  function onIncrement() {
    setValue((prevState) => prevState + 1);
  }
  return (
    <>
      <button onClick={() => onIncrement()}>+</button>
    </>
  );
};

export default Index;
