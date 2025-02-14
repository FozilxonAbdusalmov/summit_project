import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>📊 Dashboard</h1>
      <div className="cards">
        <div className="card">
          <h3>Total Teacher</h3>
          <p>100</p>
          <span>📘 46.11% 📈</span>
        </div>
        <div className="card">
          <h3>Total Student</h3>
          <p>600</p>
          <span>📗 15.6% 📈</span>
        </div>
        <div className="card">
          <h3>Total Group</h3>
          <p>102</p>
          <span>📙 46.11% 📈</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
