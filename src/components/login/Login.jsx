import { BiUser } from "react-icons/bi";
import { TbPasswordUser } from "react-icons/tb";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setIsAuthenticated }) {
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [userpassFocused, setUserpassFocused] = useState(false);
  const [userpassValue, setUserpassValue] = useState("");
  const [activeTab, setActiveTab] = useState("Admin");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = () => {
    if (usernameValue === "admin" && userpassValue === "1234") {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true); // 🔹 Holatni yangilash
      navigate("/");
    } else {
      alert("Login yoki parol noto‘g‘ri!");
    }
  };

  return (
    <div className="admin">
      <h1 className="logo">
        SUMM<span>IT</span>
      </h1>
      <div className="admin_container">
        <div className="admin_container_welcome">
          <h1>Welcome Back</h1>
          <p>Welcome Back, SUMMIT</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="admin_m_or_ad">
            <span
              className="btn"
              style={{
                left: activeTab === "Manager" ? "6px" : "calc(50% + 3px)",
              }}
            ></span>
            <button
              className={activeTab === "Manager" ? "active selected" : "active"}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("Manager");
              }}
            >
              Manager
            </button>
            <button
              className={activeTab === "Admin" ? "active selected" : "active"}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("Admin");
              }}
            >
              Admin
            </button>
          </div>

          <div className="form_item">
            <BiUser className="form_item_icons" />
            <div className="form_item_items">
              <label
                className={usernameFocused || usernameValue ? "focused" : ""}
              >
                Username
              </label>
              <input
                type="text"
                onFocus={() => setUsernameFocused(true)}
                onBlur={() => setUsernameFocused(false)}
                onChange={(e) => setUsernameValue(e.target.value)}
                value={usernameValue}
              />
            </div>
          </div>

          <div className="form_item">
            <TbPasswordUser className="form_item_icons" />
            <div className="form_item_items">
              <label
                className={userpassFocused || userpassValue ? "focused" : ""}
              >
                Your Passcode or Password
              </label>
              <input
                type="password"
                onFocus={() => setUserpassFocused(true)}
                onBlur={() => setUserpassFocused(false)}
                onChange={(e) => setUserpassValue(e.target.value)}
                value={userpassValue}
              />
            </div>
          </div>

          <input
            type="button"
            value="Sign in"
            className="sign_btn"
            onClick={handleLogin}
          />
          <a href="#" className="f_password">
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
