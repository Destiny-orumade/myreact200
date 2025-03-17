import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Settings.css"; // Import CSS

const Settings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user || user.role !== "Admin") {
    navigate("/dashboard"); // Redirect non-admins to Dashboard
    return null;
  }

  return (
    <div className="settings-container">
      <h1>⚙️ Admin Settings</h1>
      <div className="settings-card">
        <h2>🔧 System Controls</h2>
        <ul>
          <li>🛠️ Configure User Roles</li>
          <li>🔑 Security & Permissions</li>
          <li>📊 System Analytics</li>
          <li>🔄 Reset Application</li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
