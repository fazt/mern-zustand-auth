import { useEffect } from "react";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const profile = useAuthStore((state) => state.profile);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <div>
      <div>{JSON.stringify(profile)}</div>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;
