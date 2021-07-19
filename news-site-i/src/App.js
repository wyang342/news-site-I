import React, { Component } from 'react';
import News from './data/news.json';
import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import ArticleTeaser from './components/ArticleTeaser/ArticleTeaser.js'
import Article from './components/Article/Article.js'

function App() {
    const randomArticleIndex = Math.floor(Math.random() * News.length);
    const randomArticle = News[randomArticleIndex];
    let imageUrl
    try {
        imageUrl = randomArticle.multimedia[0].url;
    } catch {
        imageUrl = null;
    }

    return (
        <div>
            <h1>AppNav Component</h1>
            <hr />
            <AppNav navItems={navItems} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />

            <h1>ArticleTeaser Component</h1>
            <hr />

            <ArticleTeaser
                id={randomArticleIndex + 1}
                title={randomArticle.title}
                created_date={randomArticle.created_date}
                handleTitleClick={(articleID) => { console.log(articleID) }} />

            <h1>Article Component</h1>
            <hr />

            <Article {...randomArticle} image={imageUrl} />
        </div>

    )
}


export default App;
