import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css"; // Import CSS

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login"); // Redirect if not logged in
    return null;
  }

  return (
    <div className="profile-container">
      <h1>👤 Your Profile</h1>
      <div className="profile-card">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  );
};

export default Profile;
