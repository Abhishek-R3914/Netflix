import React from "react";
import "./Loreg.css";
import { useNavigate, useLocation } from "react-router-dom";

function Loreg() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="loreg">
      <h2
        className={`log ${location.pathname === "/login" ? "active" : ""}`}
        onClick={() => navigate("/login")}
      >
        Login
      </h2>
      <h2
        className={`reg ${location.pathname === "/register" ? "active" : ""}`}
        onClick={() => navigate("/register")}
      >
        Register
      </h2>
    </div>
  );
}

export default Loreg;
