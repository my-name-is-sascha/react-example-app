import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
import Link from './Link.js';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <Link href={href} className={'nav-link'} text={text} />
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, text, target, rel } = link;
            return (
              <li key={id}>
                <Link
                  href={href}
                  className={'nav-icon'}
                  text={text}
                  target={'_blank'}
                  rel={'noreferrer'}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
