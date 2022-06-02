import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrCountAction, incrCountAction } from "./Redux/action";

function App() {
  const count = useSelector((state) => state.count);
  console.log(count);
  const dispatch = useDispatch();
  const handleCounter = () => {};
  return (
    <div className="App">
      <h2>Counter:{count}</h2>
      <button onClick={() => dispatch(incrCountAction(1))}>Add</button>
      <button onClick={() => dispatch(decrCountAction(1))}>Reduce</button>
    </div>
  );
}

export default App;
