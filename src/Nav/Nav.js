import style from './Nav.module.scss';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className={style.nav}>
      <Link activeClass={style.active} to='home' spy={true} smooth={true} offset={0} duration={500} delay={300}>
        Home
      </Link>
      <Link activeClass={style.active} to='skills' spy={true} smooth={true} offset={0} duration={500} delay={300}>
        skills
      </Link>
      <Link activeClass={style.active} to='projects' spy={true} smooth={true} offset={0} duration={500} delay={300}>
        Projects
      </Link>
      <Link activeClass={style.active} to='contacts' spy={true} smooth={true} offset={0} duration={500} delay={300}>
        Contacts
      </Link>
    </nav>
  );
};

export default Nav;
