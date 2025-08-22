import Coffees from "./coffee.jsx"
import Pastries from "./pastries.jsx"
import Teas from "./teas.jsx"
import "./menu-styles.css";

function App() {
 
  return (
    <div className="menu-board">
      <Coffees/>
      <Teas/>
      <Pastries/>

    </div>
  )
}

export default App
