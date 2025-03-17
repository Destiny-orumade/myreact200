import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css"; // Import CSS

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"Admin" | "Editor" | "Viewer">("Viewer");

  const handleLogin = () => {
    if (!username) {
      alert("Please enter a username");
      return;
    }
    login(username, role);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="role-select">Role:</label>
      <select id="role-select" value={role} onChange={(e) => setRole(e.target.value as "Admin" | "Editor" | "Viewer")}>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Viewer">Viewer</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
