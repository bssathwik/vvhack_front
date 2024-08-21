import React from 'react';

const Navbar = ({ onLoginClick }) => {
    return (
        <nav>
            <ul>
                <li><a className="a" href="#home">Home</a></li>
                <li><a className="a" href="explore.html">Videos</a></li>
                <li><a className="a" href="book_a_coaching.html">Coaching</a></li>
                <li><a className="a" href="upcoww.html">Courses</a></li>
                <li><a className="login" onClick={onLoginClick}>Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;