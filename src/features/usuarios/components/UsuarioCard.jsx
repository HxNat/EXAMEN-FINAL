import "./UsuarioCard.css";

const UsuarioCard = ({ usuario }) => {
  return (
    <div className="usuario-card">
      <img
        src={usuario.avatar}
        alt={usuario.name}
        className="usuario-avatar"
      />

      <div className="usuario-info">
        <h3>{usuario.name}</h3>

        <p>
          <strong>Email:</strong> {usuario.email}
        </p>

        <p>
          <strong>Rol:</strong> {usuario.role}
        </p>
      </div>
    </div>
  );
};

export default UsuarioCard;