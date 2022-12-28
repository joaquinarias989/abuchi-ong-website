import { useState } from 'react';
import IconMenu from '../icons/IconMenu';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className='navbar'>
      <h2 className='navbar__logo'>
        <a href=''>
          👵ABUCHI.<small className='text-primary'>ong</small>
        </a>
      </h2>
      <div className={`navbar__nav ${isOpen ? 'navbar__nav-active' : null}`}>
        <a href='' className='nav__link'>
          Historia
        </a>
        <a href='' className='nav__link'>
          Lo que hacemos
        </a>
        <a href='' className='nav__link'>
          Blog
        </a>
        <a href='' className='nav__link'>
          Involucrarse
        </a>
        <button className='btn-secondary'>DONAR 🧡</button>
      </div>
      <button className='navbar__btn' onClick={handleMenu}>
        <IconMenu />
      </button>
    </nav>
  );
}

export default Navbar;
