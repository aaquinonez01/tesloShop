import { Route, Routes, useNavigate } from "react-router-dom";
import { ShopRoute } from "./ShopRoute";
import { AuthRoute } from "./AuthRoute";
import io from "socket.io-client";
import { useEffect } from "react";
import useUserStore from "../store/authSore";
export const AppRoute = () => {
  const socket = io("https://pishing-hack-project.onrender.com");
  const { user, setUser, setStatus } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    socket.on("userCreated", (data) => {
      if (data) {
        setTimeout(() => {
          setStatus("authenticated");
          setUser(data);
          console.log("carro");
          navigate("/");
        }, 2000);
      }
      console.log(user);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket, setStatus, user, setUser, navigate]);
  return (
    <>
      <Routes>
        <Route path="/*" element={<ShopRoute />} />
        <Route path="/auth/*" element={<AuthRoute />} />
      </Routes>
    </>
  );
};
