import { useState } from "react";
import "./Dashboard.css";
import { users } from "../../assets/mock/Users";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState(3);
  const [theme, setTheme] = useState("light");
  const { name, username, isVip, hobbies } = user || {};

  const loginBasic = () => setUser(users.find((u) => u.type === "free"));
  const loginPro = () => setUser(users.find((u) => u.type === "premium"));

  const logout = () => {
    setUser(null);
    setNotifications(3);
};
  const markAsRead = () => setNotifications(0);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`dashboard ${theme}`}>
      <button className="theme-btn" onClick={toggleTheme}>
        Tema: {theme === "light" ? "🌞 Light" : "🌙 Dark"}
      </button>

      <h1>{user ? `Benvenuto ${name}` : "Accedi alla Dashboard"}</h1>

      {!user && (
        <div className="login-container">
          <button onClick={loginBasic} className="btn">
            Login Free
          </button>
          <button onClick={loginPro} className="btn premium">
            Login Premium
          </button>
        </div>
      )}

      {user && (
        <div className="user-box">
          <p>
            <strong>Username:</strong> {username}
          </p>
          <p>
            <strong>Account:</strong> {isVip}
          </p>

          <div className="notifications">
            <h3>🔔 Notifiche: {notifications}</h3>
            {notifications > 0 && (
              <button onClick={markAsRead} className="btn small">
                Segna come lette
              </button>
            )}
          </div>

          {isVip === "premium" && (
            <div className="premium-area">
              <h2>⭐ Area Premium</h2>
              <p>Ultimo login: {lastLogin}</p>
              <p>Hobbies: {hobbies.join(", ")}</p>
            </div>
          )}

          <button onClick={logout} className="btn logout">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
