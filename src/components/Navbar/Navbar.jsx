import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/website">Início</Link></li>
            <li><Link to="/website/sobre">Sobre</Link></li>
            <li><Link to="/website/projetos">Projetos</Link></li>
            <li><Link to="/website/contato">Contato</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar