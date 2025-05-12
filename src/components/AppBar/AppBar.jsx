import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import css from './AppBar.module.css';

export default function AppBar() {
  const location = useLocation();

  const getLocation = (to) => {
    return to === location.pathname
      ? clsx(css.menuLink, css.active)
      : css.menuLink;
  };

  return (
    <header className={css.header}>
      <nav>
        <ul className={css.menu}>
          <li className={css.menuItem}>
            <NavLink to="/" className={`${getLocation('/')}`}>
              Home
            </NavLink>
          </li>
          <li className={css.menuItem}>
            <NavLink to="/product" className={`${getLocation('/product')}`}>
              Product
            </NavLink>
          </li>
          <li className={css.menuItem}>
            <NavLink to="/cart" className={`${getLocation('/cart')}`}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
