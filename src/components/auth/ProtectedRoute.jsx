import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("auth_token");

  if (!isLoggedIn) {
    return <Navigate to="/signup" />;
  }

  return children;
}
