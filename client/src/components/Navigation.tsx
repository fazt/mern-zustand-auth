import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        {isAuth ? (
          <>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Profile</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
