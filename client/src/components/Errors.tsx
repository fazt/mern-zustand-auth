import { useEffect } from "react";
import { useAuthStore } from "../store/auth";

interface Props {
  errors: any[];
}

export function Errors({ errors }: Props) {
  const cleanErrors = useAuthStore((state) => state.cleanErrors);

  useEffect(() => {
    // remove errors after 5 seconds
    const timeout = setTimeout(() => {
      cleanErrors();
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {errors.map((error) => (
        <div className="bg-red-500 text-white p-2 rounded-md mb-2">
          {error.message}
        </div>
      ))}
    </>
  );
}
