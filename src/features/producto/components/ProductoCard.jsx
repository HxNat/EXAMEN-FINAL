import { Link } from "react-router-dom";
import "./ProductoCard.css";

const ProductoCard = ({ producto }) => {
  return (
    <Link
      className="producto-link"
      to={`/producto/${producto.id}`}
    >
      <div className="card">
        <img
          src={producto.images?.[0]}
          alt={producto.title}
          className="producto-img"
        />

        <h3>{producto.title}</h3>

        <p className="descripcion">
          {producto.description}
        </p>

        <p className="precio">
          ${producto.price}
        </p>

      </div>
    </Link>
  );
};

export default ProductoCard;