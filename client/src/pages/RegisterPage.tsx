import { profileRequest, registerRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Errors } from "../components/Errors";

function RegisterPage() {
  const register = useAuthStore((state) => state.register);
  const errors = useAuthStore((state) => state.errors);
  const isAuth = useAuthStore((state) => state.isAuth);
  const getProfile = useAuthStore((state) => state.getProfile);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullName = e.currentTarget.elements[0].value;
    const email = e.currentTarget.elements[1].value;
    const password = e.currentTarget.elements[2].value;

    await register({ fullName, email, password });
    await getProfile();
  };

  useEffect(() => {
    if (isAuth) navigate("/dashboard");
  }, [isAuth]);

  return (
    <div className="flex h-[calc(100vh-150px)] items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 max-w-md p-7 rounded-md"
      >
        <h1 className="my-5 font-bold text-5xl">Register</h1>
        {errors && <Errors errors={errors} />}

        <label htmlFor="fullname">FullName:</label>
        <input
          type="text"
          placeholder="Ryan Ray"
          className="bg-gray-900 px-4 py-2 rounded-md w-full my-2 focus:outline-none"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="user@email.com"
          className="bg-gray-900 px-4 py-2 appearance-none rounded-md w-full my-2 focus:outline"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="********"
          className="bg-gray-900 px-4 py-2 rounded-md w-full my-2 focus:outline-none"
        />
        <button className="bg-indigo-500 px-4 py-2 w-full rounded-md">
          Login
        </button>
        <p className="mt-7 text-slate-400 flex justify-between">
          Already Have an Account?{" "}
          <Link to="/login" className="text-indigo-100 font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
