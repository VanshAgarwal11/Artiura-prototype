// src/pages/Login.js
import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import './Home.css'; // Assuming this is where your new CSS class is located

const Login = () => {
    return (
        <div className="centered-container">
            <SignIn path="/login" routing="path" />
        </div>
    );
};

export default Login;