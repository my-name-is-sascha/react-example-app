import { pageLinks, socialLinks } from '../data';
import Link from './Link.js';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <Link href={href} className={'footer-link'} text={text} />
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <Link
                href={href}
                className={'footer-icon'}
                text={text}
                target={'_blank'}
                rel={'noreferrer'}
              />
            </li>
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
