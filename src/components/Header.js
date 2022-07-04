import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ pathname }) => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    return (
        <header className="app-bar">
            <div className="app-bar__brand">
                <Link to="/">
                    <h1>Movie Catalogue</h1>
                </Link>
            </div>
            <div className="app-bar__menu">
                <button onClick={() => setHamburgerMenu(!hamburgerMenu)}>☰</button>
            </div>
            <nav className={`app-bar__navigation ${hamburgerMenu ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to="/now-playing" className={`${pathname === '/now-playing' ? 'active' : ''}`}>Now Playing</Link>
                    </li>
                    <li>
                        <Link to="/upcoming" className={`${pathname === '/upcoming' ? 'active' : ''}`}>Upcoming</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;