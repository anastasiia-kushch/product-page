import { Link } from 'react-router-dom';
import { MousePointerClick } from 'lucide-react';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className="container">
      <div className={css.pageContainer}>
        <b>Oops! Not found...</b>
        <div className={css.linkContainer}>
          <MousePointerClick className={css.icon} />
          <Link to="/" className={css.link}>
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
}
