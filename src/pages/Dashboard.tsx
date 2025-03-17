import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => <div className="dashboard-section">🔧 Admin Controls: Manage users and settings.</div>;
const EditorDashboard = () => <div className="dashboard-section">✍️ Editor Panel: Edit and manage content.</div>;
const ViewerDashboard = () => <div className="dashboard-section">📊 Reports: View-only access to reports.</div>;

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
