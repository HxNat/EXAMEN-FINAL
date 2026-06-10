import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  const [menuAbierto, setMenuAbierto] = useState(true);

  return (
    <div className="app">
      <header className="header">
        <button
          className="menu-btn"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>

        <h3>0192650 - 0192672 / Nataly Angarita Rueda - Maria Camila Sarabia Contreras</h3>
      </header>

      <div className="body">
        {menuAbierto && (
          <aside className="drawer">
            <ul>
              <li>
                <NavLink to="/productos">
                  ♞ Productos
                </NavLink>
              </li>

              <li>
                <NavLink to="/usuarios">
                  ♛ Usuarios
                </NavLink>
              </li>
            </ul>
          </aside>
        )}

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;