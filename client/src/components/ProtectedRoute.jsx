import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user, children }) => {
  // console.log("🛡️ ProtectedRoute check. Current user state:", user);

  if (!user) {
    // console.warn("⛔ User is empty! Kicking back to /sign-in");
    return <Navigate to="/sign-in" replace />;
  }

  // console.log("✅ User is authenticated! Allowing access to dashboard.");
  return children ? children : <Outlet />;
};
