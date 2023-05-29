import React from "react";
import { Link } from "react-router-dom";

function Candybar() {
  return (
    <div>
      <h1>Candy Bar</h1>
      <img
        src="https://m.media-amazon.com/images/I/51yaVr+NPBL._AC_.jpg"
        alt="Candy Bar"
      />
      <br />
       <Link to="/">
        Home
      </Link>
    </div>
  );
}

export default Candybar;
