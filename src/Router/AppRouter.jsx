import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { GestPlanRoutes } from "../gestPlan/routes/GestPlanRoutes";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  // const authStatus = status; // 'authenticated'; // 'not-authenticated';
  console.log(status);
  //

  useEffect(() => {
    console.log("useeffect: " + status);
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }
  return (
    <Routes>
      {status === "not-authenticated" ? (
        <Route path="/*" element={<AuthRoutes />} />
      ) : (
        <Route path="/*" element={<GestPlanRoutes />} />
      )}
    </Routes>
  );
};
