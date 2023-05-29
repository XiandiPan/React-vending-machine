import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Candybar from "./Candybar";
import Chips from "./Chips";
import Crackers from "./Crackers"
import VendingMachine from "./VendingMachine";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/chips" element={<Chips />} />
          <Route path="/candybar" element={<Candybar />} />
          <Route path="/crackers" element={<Crackers />} />
          <Route path="/" element={<VendingMachine/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
