import React from "react";
import { useContext } from "react";
import { userContext } from "../ContextApp";
import "./index.css";

const Index = () => {
  const { count, setValue } = useContext(userContext);
  const onDecrement = () => {
    setValue((prevState) => prevState - 1);
  };
  return (
    <>
      <button onClick={onDecrement}>-</button>
    </>
  );
};

export default Index;
