import { useAuth } from "../context/AuthContext";
import "./Dashboard.css"; // Import styles

const AdminDashboard = () => (
  <div className="dashboard-section admin">
    <h2>🔧 Admin Controls</h2>
    <ul>
      <li> Manage Users</li>
      <li> Adjust System Settings</li>
      <li> View Analytics</li>
    </ul>
  </div>
);

const EditorDashboard = () => (
  <div className="dashboard-section editor">
    <h2>✍️ Editor Panel</h2>
    <ul>
      <li>Edit Content</li>
      <li> Manage Posts</li>
      <li> Upload Media</li>
    </ul>
  </div>
);

const ViewerDashboard = () => (
  <div className="dashboard-section viewer">
    <h2>Reports</h2>
    <p>View-only access to analytics and reports.</p>
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Please log in to access Delligram.</p>;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome to Delligram, {user.username}! 🚀</h1>
      {user.role === "Admin" && <AdminDashboard />}
      {user.role === "Editor" && <EditorDashboard />}
      {user.role === "Viewer" && <ViewerDashboard />}
    </div>
  );
};

export default Dashboard;
