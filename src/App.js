import React, { Component } from 'react';
import News from './data/news.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import ArticleTeaser from './components/ArticleTeaser/ArticleTeaser.js'
import Article from './components/Article/Article.js'

class App extends Component {
  constructor(props) {
    super(props);
    const randomArticleIndex = Math.floor(Math.random() * News.length);
    const randomArticle = News[randomArticleIndex];
    this.state = {
      navItems: [
        {
          label: "HOME",
          value: "home"
        },
        {
          label: "OPINION",
          value: "opinion"
        },
        {
          label: "WORLD",
          value: "world"
        },
        {
          label: "NATIONAL",
          value: "national"
        },
        {
          label: "POLITICS",
          value: "politics"
        },
        {
          label: "UPSHOT",
          value: "upshot"
        },
        {
          label: "NY REGION",
          value: "nyregion"
        },
        {
          label: "BUSINESS",
          value: "business"
        }
      ],
      article: {
        id: randomArticleIndex,
        title: randomArticle.title,
        abstract: randomArticle.abstract,
        byline: randomArticle.byline,
        image: randomArticle.multimedia.length ? randomArticle.multimedia[0].url : null,
        created_date: randomArticle.created_date
      }
    }
  }

  render() {
    console.log(this.state.article)
    return (
      <div>
        <h1>AppNav Component</h1>
        <hr />
        <AppNav navItems={this.state.navItems} handleNavClick={(clickedItem) => console.log(clickedItem)} />
        <h1>ArticleTeaser Component</h1>
        <hr />
        <ArticleTeaser 
          id={this.state.article.id}
          title={this.state.article.title}
          created_date={this.state.article.created_date}
          handleTitleClick={(articleID) => console.log(articleID)} />
        <h1>Article Component</h1>
        <hr />
        <Article {...this.state.article} />
      </div>
    );
  }
}

export default App;
