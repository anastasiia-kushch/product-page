import { NavLink } from 'react-router-dom';
import { MousePointerClick } from 'lucide-react';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>Welcome to the Cozy Pet Shop!</h1>
      <p className={css.description}>
        We offer high-quality, comfortable homes for your little furry friends
      </p>
      <div className={css.linkContainer}>
        <MousePointerClick className={css.icon} />
        <NavLink to="/product" className={css.link}>
          View Small Animal House
        </NavLink>
      </div>
    </div>
  );
}
