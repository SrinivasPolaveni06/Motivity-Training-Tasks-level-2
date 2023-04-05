import "./index.css";
import TemparatureHome from "../../components/TemparatureHome";
import Decrement from "../../components/Decrement";
import Increment from "../../components/Increament";
import { userContext } from "../../components/ContextApp";
import { useState } from "react";

const Index = () => {
  const [count, setValue] = useState(24);
  return (
    <userContext.Provider value={{ count, setValue }}>
      <div className="App">
        <TemparatureHome />
        <div className="buttons-card">
          <Increment />
          <Decrement />
        </div>
      </div>
    </userContext.Provider>
  );
};
export default Index;
