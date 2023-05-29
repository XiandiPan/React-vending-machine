import React from "react";
import { Link } from "react-router-dom";

function Crackers() {
  return (
    <div>
      <h1>Crackers</h1>
      <img
        src="https://www.bakingbusiness.com/ext/resources/2021/11/1116-AdobeStockCrackers.jpg?height=667&t=1637075161&width=1080"
        alt="Crackers"
      />
      <br />
       <Link to="/">
        Home
      </Link>
    </div>
  );
}

export default Crackers;
