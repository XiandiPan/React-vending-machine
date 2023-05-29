import React from "react";
import { Link } from "react-router-dom";


function VendingMachine() {
  return (
    <div>
      <img src="https://cdn11.bigcommerce.com/s-xun5w23utl/images/stencil/1280x1280/products/7067/12026/evoke-6-snack-vending-machine__47319.1607762904.jpg?c=1" width="50%" height="50%"></img>
    <ul className="vending-machine">
      <li>
      <Link to="/candybar">
        Candy Bar
      </Link>
      </li>
      <li>
      <Link to="/chips">
        Chips
      </Link>
      </li>
      <li>
      <Link to="/crackers">
        Crackers
      </Link>
      </li>
    </ul>
    </div>
  );
}

export default VendingMachine;