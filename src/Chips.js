import React from "react";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/220px-Potato-Chips.jpg"
        alt="Chip"
      />
      <br />
       <Link to="/">
        Home
      </Link>
    </div>
  );
}

export default Chips;
