import Coffees from "./coffee.jsx";
import Pastries from "./pastries.jsx";
import Teas from "./teas.jsx";
import "./menu-styles.css";
import { useState } from "react";

const App = () => {
  const [showCoffees, setShowCoffees] = useState(true);
  const [showTeas, setShowTeas] = useState(true);
  const [showPastries, setShowPastries] = useState(true);

  const [coffeeItems] = useState(["Espresso", "Cappuccino", "Latte"]);
  const [teaItems] = useState(["Green Tea", "Chamomile Tea", "Earl Grey Tea"]);
  const [pastryItems] = useState(["Croissant", "Bagel", "Muffins"]);

  return (
    <div className="menu-board">
      <h2>Java Joy Menu Board</h2>
      {showCoffees && <Coffees Items={coffeeItems} />}
      {showTeas && <Teas Items={teaItems} />}
      {showPastries && <Pastries Items={pastryItems} />}
    </div>
  );
};

export default App;
