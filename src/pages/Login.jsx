import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "12345") {
        navigate("/client", { state: { userEmail: email } });
      } else {
        alert("Email yoki parol noto‘g‘ri!");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? (
            <div className="spinner"></div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
