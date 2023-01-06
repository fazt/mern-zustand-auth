import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAllowed: boolean;
  children: React.ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute = ({
  isAllowed,
  children,
  redirectTo = "/login",
}: Props) => {
  if (!isAllowed) return <Navigate to={redirectTo} />;
  return children ? children : <Outlet />;
};
