// src/components/ArticleList.js
import React from 'react';

const ArticleList = () => {
    // Sample articles (You can replace this with fetched data later)
    const articles = [
        { id: 1, title: 'How to Improve Your Reading Habits', summary: 'A guide to better reading habits...' },
        { id: 2, title: 'Understanding Natural Language Processing', summary: 'An introduction to NLP techniques...' },
        { id: 3, title: 'The Benefits of Personalized Content', summary: 'How personalized content can enhance learning...' },
    ];

    return (
        <div className="article-list">
            {articles.map((article) => (
                <div key={article.id} className="article-item">
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <a href="#read-more">Read More</a>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;