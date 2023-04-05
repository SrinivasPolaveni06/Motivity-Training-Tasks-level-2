import { useContext } from "react";
import { userContext } from "../ContextApp";
import "./index.css";

const Index = () => {
  const { count } = useContext(userContext);
  //   const [count, setValue] = useState(24);

  let temparatureCard;
  let text = "Normal";

  if (count >= 30) {
    temparatureCard = "red-card";
    text = "Hot";
  } else if (count > 10 && count <= 20) {
    temparatureCard = "green-card";
    text = "Cool";
  } else if (count <= 10) {
    temparatureCard = "cool-card";
    text = "ICE";
  } else {
    temparatureCard = "temparature-card";
    text = "Normal";
  }
  return (
    <>
      <div className={`normalTemparature ${temparatureCard}`}>
        <h3>
          {count} <sup>o</sup>C
        </h3>

        <p className=" mt-2">
          <strong>{text}</strong>
        </p>
      </div>
    </>
  );
};

export default Index;
