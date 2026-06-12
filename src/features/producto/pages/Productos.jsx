import { useEffect, useState } from "react";
import { getProducto } from "../service/productoService";
import ProductoCard from "../components/ProductoCard";
import "./Productos.css";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtener();
  }, []);

  const obtener = async () => {
    const data = await getProducto();
    setProductos(data);
  };

  return (
    <>
      <h1>Productos</h1>

      <div className="productos-grid">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id} 
            producto={producto}
          />
        ))}
      </div>
    </>
  );
};

export default Productos;