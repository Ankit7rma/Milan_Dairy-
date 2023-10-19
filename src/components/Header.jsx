
import { Link } from 'react-scroll';
import "../index.css"

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50 ">
      <div className="container mx-auto py-4 flex justify-between" >
        <div className="logo text-xl font-bold">
          <Link to="home" smooth={true} duration={500}>
            Milan Dairy
          </Link>
        </div>
        <nav className="flex space-x-4 ">
          <Link to="home" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
