// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Artiura</h1>
            <nav>
                <ul className="nav-links">
                    {/* Navigation links for Home and About pages */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>

                    {/* Show SignInButton only when the user is signed out */}
                    <SignedOut>
                        <li>
                            <SignInButton mode="modal">
                                {/* Login button styled with the Clerk color scheme */}
                                <button className="sign-in-btn">Login</button>
                            </SignInButton>
                        </li>
                    </SignedOut>

                    {/* Show UserButton only when the user is signed in */}
                    <SignedIn>
                        <li>
                            <UserButton />
                        </li>
                    </SignedIn>
                </ul>
            </nav>
        </header>
    );
};

export default Header;