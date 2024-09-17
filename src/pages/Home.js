// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/signup'); // Redirects to the signup page
    };

    const handleLogin = () => {
        navigate('/login'); // Redirects to the login page
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Feed Your Mind with Content that Matters</h1>
                <p className="home-subtitle">Long reads, personalized recommendations, and smarter learning--all in one place</p>
                <div className="home-buttons">
                    <button className="get-started-btn" onClick={handleGetStarted}>
                        Get Started
                    </button>
                    <button className="login-btn" onClick={handleLogin}>
                        Log in Existing Account
                    </button>
                </div>
                {/* Rotating banner with platform names */}
                <div className="news-ticker">
                    <div className="ticker-content">
                        BBC &nbsp; | &nbsp; Wired &nbsp; | &nbsp; The Verge &nbsp; | &nbsp; Time &nbsp; | &nbsp; The Times of India &nbsp; | &nbsp; The Guardian &nbsp; | &nbsp; New York Times &nbsp; | &nbsp; The Washington Post &nbsp; | &nbsp; Forbes &nbsp; | &nbsp; Reuters
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
