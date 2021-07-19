import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser';


function ArticleList() {
    const getArticleTeasers = (articles, handleTitleClick) => {
        articles.map((article, index) => {
            < ArticleTeaser id={index} title={article.title} created_date={article.created_date} handleTitleClick={() => handleTitleClick} />
        })
    }

    return (
        // { getArticleTeasers() }
    )
}


// class ArticleList extends Component {
//     getArticleTeasers = (articles, handleTitleClick) => {
//         articles.map((article, index) => {
//             < ArticleTeaser id={index} title={article.title} created_date={article.created_date} handleTitleClick={() => handleTitleClick} />
//         })
//     }


//     render() {
//         const { articles, handleTitleClick } = this.props;  // destructure props inside render()

//         return;
//     }
// }