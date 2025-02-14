import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaBook,
  FaGraduationCap,
  FaCoins,
  FaTachometerAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}"); // ❗ Xatolik chiqmasligi uchun default qiymat berildi

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const menuItems = [
    {
      path: "/",
      label: "Dashboard",
      icon: <FaTachometerAlt className="icon" />,
    },
    { path: "/subjects", label: "Subjects", icon: <FaBook className="icon" /> },
    { path: "/group", label: "Group", icon: <FaUsers className="icon" /> },
    {
      path: "/teachers",
      label: "Teachers",
      icon: <FaChalkboardTeacher className="icon" />,
    },
    {
      path: "/students",
      label: "Students",
      icon: <FaGraduationCap className="icon" />,
    },
    {
      path: "/coin-list",
      label: "Coin List",
      icon: <FaCoins className="icon" />,
    },
  ];

  return (
    <div className="sidebar">
      <h2 className="logo">SUMMIT</h2>
      {user.name && <p className="user-info">Welcome, {user.name}</p>}{" "}
      <nav>
        {menuItems.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {icon} {label}
          </NavLink>
        ))}
        <button type="button" className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default Sidebar;
