import "./App.css";
import { TImer } from "./Component/Counter";
function App() {
  return (
    <div className='App'>
      <Counter start={10} end={50} />
    </div>
  );
}

export default App;
