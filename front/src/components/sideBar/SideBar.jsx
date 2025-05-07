import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "←" : "→"}
      </button>

      <nav className="sidebar-nav">
        <Link to="/criar-ticket">
          <button>Criar ticket</button>
        </Link>
        <Link to="/#">
          <button>Meus tickets</button>
        </Link>
        <Link to="/#">
          <button>Todos os tickets</button>
        </Link>
        <Link to="/#">
          <button>Classificar tickets</button>
        </Link>
      </nav>

      <div className="sidebar-footer">
        <Link to="/#">
          <button className="logout-button">Sair</button>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;