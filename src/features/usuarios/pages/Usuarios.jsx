import { useEffect, useState } from "react";
import { getUsuarios } from "../service/usuarioService";
import UsuarioCard from "../components/UsuarioCard";
import "./Usuarios.css";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    const data = await getUsuarios();
    setUsuarios(data);
  };

  return (
  <>
    <h1>Usuarios</h1>

    <div className="usuarios-grid">
      {usuarios.map((usuario) => (
        <UsuarioCard
          key={usuario.id}
          usuario={usuario}
        />
      ))}
    </div>
  </>
);
};

export default Usuarios;