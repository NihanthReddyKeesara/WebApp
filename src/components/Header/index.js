import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            .
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            .
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
