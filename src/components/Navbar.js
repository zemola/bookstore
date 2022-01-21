import { Link } from 'react-router-dom';
import id from './id.png';

const Nav = () => (
  <div className="nav">
    <nav className="same">
      <h1 className="heading">Bookstore CMS</h1>
      <ul className="nav-link">
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </ul>
    </nav>
    <img src={id} alt="id" width="40px" height="40px" />
  </div>
);

export default Nav;
