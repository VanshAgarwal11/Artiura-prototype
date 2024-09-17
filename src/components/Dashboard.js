// src/components/Dashboard.js
import React from 'react';
import ArticleList from './ArticleList';

const Dashboard = () => {
    return (
        <main className="dashboard">
            <h2>Your Personalized Feed</h2>
            <ArticleList />
        </main>
    );
};

export default Dashboard;