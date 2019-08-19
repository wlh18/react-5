import React from 'react'

// Import Link
import {Link} from 'react-router-dom';

// Style obj for nav
const navStyles = {
    width: '100vw',
    height: '10vh',
    background: 'tomato',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center'
};

const linkStyle = {
    color: 'white',
    fontSize: '20px',
    marginRight: '10px',
    textDecoration: 'none'
};

const Navbar = () => (
    <nav style={navStyles}>
        <Link to="/" style={linkStyle}>
            <span>Home</span>
        </Link>
        <Link to="/about" style={linkStyle}>
            <span>About</span>        
        </Link>
        <Link to="/contact" style={linkStyle}>
            <span>Contact</span>        
        </Link>
    </nav>
)

export default Navbar;