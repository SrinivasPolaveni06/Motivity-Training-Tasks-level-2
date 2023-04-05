import React from "react";
import { useSelector } from "react-redux";
const Index = () => {
  //const { count } = useContext(userContext);
  const Count = useSelector((state) => state.CountReducer.count);
  return (
    <div>
      <div>
        <h5>Counter App</h5>
        <p>Count Value {Count}</p>
      </div>
    </div>
  );
};

export default Index;
