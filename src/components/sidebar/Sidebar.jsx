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
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const menuItems = [
    {
      path: "/dashboard",
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
      <div className="sidebar_header">
        <h1 className="logo">
          SUMM<span>IT</span>
        </h1>
      </div>

      {user.name && <p className="user-info">Welcome, {user.name}</p>}

      <div className="sidebar_main">
        {menuItems.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? "sidebar_main_items_active" : "sidebar_main_items"
            }
          >
            {icon} {label}
          </NavLink>
        ))}
      </div>
      <div className="logut_div">
        <img
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          alt="img_person"
        />
        <p>Fozilxon</p>
        <button type="button" className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt className="icon_exit" />
        </button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default Sidebar;
