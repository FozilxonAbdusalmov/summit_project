import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Subjects from "./components/subjects/Subjects";
import Group from "./components/group/Group";
import Teachers from "./components/teachers/Teachers";
import CoinList from "./components/coinList/CoinList";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Students from "./students/Students";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <Router>
      <div className="app">
        {isAuthenticated && <Sidebar />}
        <div className="content">
          <Routes>
            <Route
              path="/login"
              element={
                !isAuthenticated ? (
                  <Login setIsAuthenticated={setIsAuthenticated} />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/students"
              element={
                isAuthenticated ? <Students /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/subjects"
              element={
                isAuthenticated ? <Subjects /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/group"
              element={isAuthenticated ? <Group /> : <Navigate to="/login" />}
            />
            <Route
              path="/teachers"
              element={
                isAuthenticated ? <Teachers /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/coin-list"
              element={
                isAuthenticated ? <CoinList /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </div>
      </div>

      {isAuthenticated ? <Footer /> : ""}
    </Router>
  );
}

export default App;
