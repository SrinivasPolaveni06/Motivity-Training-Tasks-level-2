import "./App.css";
import Home from "./components/Home";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import { Provider } from "react-redux";
import { Store } from "./components/Redux/ReduxStore/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Decrement />
        <Increment />
        <Home />
      </div>
    </Provider>
  );
}
