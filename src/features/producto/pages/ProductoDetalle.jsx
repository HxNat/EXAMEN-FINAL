import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoUnico } from "../service/productoService";
import "./ProductoDetalle.css";

const ProductoDetalle = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [imagenActual, setImagenActual] = useState("");

  useEffect(() => {
    obtenerProducto();
  }, [id]);

  const obtenerProducto = async () => {
    try {
      const data = await getProductoUnico(id);

      setProducto(data);

      if (data.images?.length > 0) {
        setImagenActual(data.images[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!producto) {
    return <h2>Cargando producto...</h2>;
  }

  return (
    <>
      <div className="detalle-superior">

        <div className="galeria">
          <div className="miniaturas">
            {producto.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`imagen-${index}`}
                className="miniatura"
                onClick={() => setImagenActual(img)}
              />
            ))}
          </div>

          <div className="imagen-principal">
            <img
              src={imagenActual}
              alt={producto.title}
            />
          </div>
        </div>

        <div className="info-producto">

          <span className="badge-nuevo">
            Nuevo
          </span>

          <p className="categoria">
            {producto.category?.name}
          </p>

          <h1>{producto.title}</h1>

          <h2 className="precio">
            ${producto.price}
          </h2>

          <p className="envio-gratis">
            🚚 Envío gratis
          </p>

          <p className="llega">
            Llega entre 2 y 5 días hábiles
          </p>

          <div className="acerca-producto">
            <h3>Acerca de este producto</h3>

            <p>
              {producto.description}
            </p>
          </div>

          <div className="acciones">
            <button className="btn-comprar">
              Comprar ahora
            </button>

            <button className="btn-carrito">
              Agregar al carrito
            </button>
          </div>

        </div>

      </div>

      <div className="descripcion-card">
        <h2>Descripción</h2>

        <p>
          {producto.description}
        </p>
      </div>
    </>
  );
};

export default ProductoDetalle;