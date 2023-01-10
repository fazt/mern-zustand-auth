import { useAuthStore } from "../store/auth";

function ProfilePage() {
  const profile = useAuthStore((state) => state.profile);
  console.log({
    profile,
  });

  return (
    <div className="h-[calc(100vh-150px)] flex items-center justify-center">
      <div className="bg-zinc-700 p-20">
        <h3 className="text-4xl font-bold">{profile.email}</h3>
        <p>{profile.createdAt}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
