import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product_details/:productId" element={<ProductDetail />} />
      </Routes>
    );
  };
  export default AppRoutes;