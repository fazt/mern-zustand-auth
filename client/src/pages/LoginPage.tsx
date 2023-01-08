import { loginRequest, profileRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.elements[0].value;
    const password = e.currentTarget.elements[1].value;

    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data);

    navigate('/dashboard')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="user@mail.com" />
        <input type="password" placeholder="********" />
        <button>Login</button>
      </form>

      <p>
        Don't Have an Account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default LoginPage;
