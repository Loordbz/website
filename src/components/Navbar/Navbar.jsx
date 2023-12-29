import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">Início</Link></li>
            <li><Link to="sobre">Sobre</Link></li>
            <li><Link to="projetos">Projetos</Link></li>
            <li><Link to="contato">Contato</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar