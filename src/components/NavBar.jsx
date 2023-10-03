import { NavLink } from 'react-router-dom';
import { pageLinks, socialMediaLinks } from '../data/data';
import './navbar.css';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h4 className="nav-logo-text">Sky Runner</h4>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <NavLink to={link.href} className="nav-link">
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <ul className="nav-icons">
          {socialMediaLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <NavLink to={href} target="_blank" rel="noreferrer" className="nav-icon">
                  <i className={icon}></i>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
