import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Client = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/"); 
  };

  return (
    <div className="dashboard">
      <div className="header">
        <div className="header-left">
          <button className="menu-btn">☰</button>
          <h1>Header</h1>
        </div>

        <div className="header-right">
          <span>John.M</span>
          <button className="exit-btn" onClick={handleExit}>
            Exit
          </button>
        </div>
      </div>

      <div className="body">
        <div className="sidebar">
          <button className="side-btn">1</button>
          <button className="side-btn">2</button>
          <button className="side-btn">3</button>
          <button className="side-btn">4</button>
          <button className="side-btn">5</button>
        </div>

        <div className="content">
          <button className="create-btn">CREATE</button>
         
        </div>
      </div>
    </div>
  );
};

export default Client;
