import { useAuthStore } from "../store/auth";

function ProfilePage() {
  const profile = useAuthStore((state) => state.profile);

  return (
    <div>
      <div>{JSON.stringify(profile)}</div>
    </div>
  );
}

export default ProfilePage;
