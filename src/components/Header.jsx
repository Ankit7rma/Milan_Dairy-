
import { Link } from 'react-scroll';
import "../index.css"

const Header = () => {
  return (<>
    <header className="header flex  gap-6 sticky ">
      <div className="logo">
        <Link to="home" smooth={true} duration={500}>
          Milan Dairy
        </Link>
      </div>
      <nav>
        <ul className="nav-links flex cursor-pointer gap-6 ">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
      
    </>
  );
};

export default Header;
