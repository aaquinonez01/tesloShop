import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";

export const AuthRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LoginPage />} />
      </Routes>
    </>
  );
};
