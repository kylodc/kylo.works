import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Home.css';

export default function Navbar() {
    const location = useLocation();
    const { pathname } = location;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="portfolio-navbar">
            <div className="portfolio-logo">Portfolio</div>
            
            {/* Desktop Navigation */}
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

            {/* Mobile Hamburger Menu */}
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
                    <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
                        <div className="mobile-nav-links">
                            <NavLink 
                                to="/" 
                                className={`mobile-nav-link ${pathname === '/' ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                Home
                                {pathname === '/' && <span className="mobile-active-dot"></span>}
                            </NavLink>
                            <NavLink 
                                to="/about" 
                                className={`mobile-nav-link ${pathname === '/about' ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                About
                                {pathname === '/about' && <span className="mobile-active-dot"></span>}
                            </NavLink>
                            <NavLink 
                                to="/works" 
                                className={`mobile-nav-link ${pathname === '/works' ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                Works
                                {pathname === '/works' && <span className="mobile-active-dot"></span>}
                            </NavLink>
                            <NavLink 
                                to="/contact" 
                                className={`mobile-nav-link ${pathname === '/contact' ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                Contact
                                {pathname === '/contact' && <span className="mobile-active-dot"></span>}
                            </NavLink>
                        </div>
                        <div className="mobile-menu-footer">
                            Tap anywhere to close
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
