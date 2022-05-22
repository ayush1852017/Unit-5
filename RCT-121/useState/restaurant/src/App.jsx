import "./App.css";
import { AddRestaurant } from "./Components/AddRestaurant";
import { FetchDataComponent } from "./Components/FetchDataComponent";

function App() {
  return (
    <div className="App">
      <AddRestaurant />
      <FetchDataComponent />
    </div>
  );
}

export default App;
