import "./App.css";
import { AddRestaurant } from "./Components/AddRestaurant";
import { RestaurantDetails } from "./Components/RestaurantDetails";

function App() {
  return (
    <div className="App">
      <AddRestaurant />
      <RestaurantDetails />
    </div>
  );
}

export default App;
