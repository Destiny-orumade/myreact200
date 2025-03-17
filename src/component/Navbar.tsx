import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css"; // Import CSS

<Link to="/profile" className="nav-link">Profile</Link>




const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null; // Hide navbar if not logged in

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand"> Delligram </span>
      </div>
      <div className="navbar-center">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        {user.role === "Admin" && <Link to="/settings" className="nav-link">Settings</Link>}
      </div>
      <div className="navbar-right">
        <span className="user-info">{user.username} ({user.role})</span>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>    </nav>
  );
};



export default Navbar;
