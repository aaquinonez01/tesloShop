import { Route, Routes } from "react-router-dom";
import { ShopLayout } from "../layout/ShopLayout";
import { HomePage } from "../pages/HomePage";

export const ShopRoute = () => {
  return (
    <ShopLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ShopLayout>
  );
};
