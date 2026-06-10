import { Routes, Route } from "react-router-dom";

import Productos from "../features/producto/pages/Productos";
import ProductoDetalle from "../features/producto/pages/ProductoDetalle";
import Usuarios from "../features/usuarios/pages/Usuarios";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Productos />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/producto/:id" element={<ProductoDetalle />} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  );
};

export default AppRoutes;