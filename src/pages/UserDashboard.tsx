import { useAuth } from "../context/AuthContext";
import "./Dashboard.css"; // Import styles

const AdminDashboard = () => (
  <div className="dashboard-section admin">
    <h2>🔧 Admin Dashboard</h2>
    <ul>
      <li> Manage Users</li>
      <li>System Settings</li>
      <li> View Analytics</li>
    </ul>
  </div>
);

const EditorDashboard = () => (
  <div className="dashboard-section editor">
    <h2>✍️ Editor Dashboard</h2>
    <ul>
      <li> Edit Content</li>
      <li> Manage Posts</li>
      <li> Upload Media</li>
    </ul>
  </div>
);

const ViewerDashboard = () => (
  <div className="dashboard-section viewer">
    <h2> Viewer Dashboard</h2>
    <p>View-only access to reports and analytics.</p>
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Please log in to access Delligram.</p>;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.username}! 🚀</h1>
      <p>Role: <strong>{user.role}</strong></p>

      {user.role === "Admin" && <AdminDashboard />}
      {user.role === "Editor" && <EditorDashboard />}
      {user.role === "Viewer" && <ViewerDashboard />}
    </div>
  );
};

export default Dashboard;
