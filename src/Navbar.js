import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';


export default function Navbar() {
    const location = useLocation();
    const { pathname } = location;

    // Determine active section for styling based on path
    const getActive = () => {
        if (pathname === '/') return 'home';
        if (pathname === '/about') return 'about';
        if (pathname === '/works') return 'works';
        if (pathname === '/contact') return 'contact';
        return '';
    };

    const active = getActive();

    const accentMap = {
        home: '25%',
        about: '50%',
        works: '75%',
        contact: '100%'
    };

    // Default to home width if no match (or 0 if you prefer no underline)
    const accentWidth = accentMap[active] || '0%';

    return (
        <nav className="portfolio-navbar">
            <div className="portfolio-logo">Portfolio</div>
            <ul className="portfolio-navlinks">
                <li className={pathname === '/' ? 'active' : ''}>
                    <NavLink to="/" className="nav-link" end>
                        Home
                    </NavLink>
                </li>
                <li className={pathname === '/about' ? 'active' : ''}>
                    <NavLink to="/about" className="nav-link">
                        About
                    </NavLink>
                </li>
                <li className={pathname === '/works' ? 'active' : ''}>
                    <NavLink to="/works" className="nav-link">
                        Works
                    </NavLink>
                </li>
                <li className={pathname === '/contact' ? 'active' : ''}>
                    <NavLink to="/contact" className="nav-link">
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className="nav-accent">
                <div
                    className="nav-accent-fill"
                    style={{ width: accentWidth, opacity: accentWidth === '0%' ? 0 : 1 }}
                />
            </div>
        </nav>
    );
}
