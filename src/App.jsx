import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="header-left">
          <button className="menu-btn">☰</button>
          <h1>Header</h1>
        </div>

        <div className="header-right">
          <span>John.M</span>
          <button className="exit-btn">Exit</button>
        </div>
      </div>

      <div className="body">
        <div className="sidebar">
          <button className="side-btn">🚚 Truck 1</button>
          <button className="side-btn">🚚 Truck 2</button>
          <button className="side-btn">🚚 Truck 3</button>
          <button className="side-btn">🚚 Truck 4</button>
          <button className="side-btn">🚚 Truck 5</button>
        </div>

        <div className="content">
          <button className="create-btn">CREATE</button>
          
        </div>
      </div>
    </div>
  );
};

export default App;
